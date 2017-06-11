import React, { Component } from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import Alert from "react-s-alert";

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
        <div className="s-alert-box-inner">
          <code>{this.props.message}</code>
        </div>
        <h3>{this.props.customFields.customerName}</h3>
        <span className="s-alert-close" onClick={this.props.handleClose} />
      </div>
    );
  }
}

export default connect(
  {
    isError: state`app.isError`,
    errorMessage: state`app.errorMessage`
  },
  class Snackbar extends Component {
    componentDidUpdate() {
      if (!this.props.isError) {
        return;
      }
      Alert.error(this.props.errorMessage);
    }
    render() {
      return (
        <div>
          <Alert
            stack={{ limit: 3 }}
            position="top"
            timeout={2000}
            effect="flip"
            contentTemplate={ErrorTemplate}
          />
        </div>
      );
    }
  }
);
