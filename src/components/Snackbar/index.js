import React, { Component } from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import Alert from "react-s-alert";

import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";

// eslint-disable-next-line import/no-webpack-loader-syntax
// import "!style-loader!css-loader!font-awesome/css/font-awesome.min.css";

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
        <h1>Error</h1>
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
      Alert.error(this.props.errorMessage, {
        effect: "slide"
      });
    }
    render() {
      return (
        <div>
          <Alert
            stack={{ limit: 3 }}
            position="top"
            timeout={5000}
            contentTemplate={ErrorTemplate}
          />
        </div>
      );
    }
  }
);
