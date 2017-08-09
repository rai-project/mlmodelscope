import React, { Component } from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import Alert from "react-s-alert";
import idx from "idx";

import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "react-s-alert/dist/s-alert-css-effects/flip.css";

class ErrorTemplate extends React.Component {
  handleConfirm() {
    Alert.close(this.props.id);
  }
  render() {
    return (
      <div
        className={this.props.classNames}
        id={this.props.id}
        style={this.props.styles}
      >
        <h4>
          {this.props.message.name}
        </h4>
        <div className="s-alert-box-inner">
          <b>{idx(this.props.message, _ => _.body.code)}</b>
          &nbsp; &nbsp; :: &nbsp; &nbsp;
          <code>{idx(this.props.message, _ => _.body.message)}</code>
        </div>
        <span className="s-alert-close" onClick={this.props.handleClose} />
      </div>
    );
  }
}

export default connect(
  {
    error: state`app.error`
  },
  class Snackbar extends Component {
    componentDidUpdate() {
      if (!this.props.error) {
        return;
      }
      Alert.error(this.props.error);
    }
    render() {
      return (
        <Alert
          stack={{ limit: 3 }}
          position="top"
          timeout={5000}
          effect="flip"
          contentTemplate={ErrorTemplate}
        />
      );
    }
  }
);
