import idx from "idx";
import yeast from "yeast";
import React, { Component } from "react";
import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import Alert from "react-s-alert";
import { isArray, isNil, isEmpty } from "lodash";
import { Label, Message, Icon, Divider, Accordion } from "semantic-ui-react";

import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "react-s-alert/dist/s-alert-css-effects/flip.css";

class ErrorTemplate extends React.Component {
  handleConfirm() {
    Alert.close(this.props.id);
  }
  render() {
    const { error } = this.props.customFields;
    console.log(error);
    let code = idx(error, _ => _.body.code);
    let message = idx(error, _ => _.body.message);
    let stack = idx(error, _ => _.body.stack);
    if (!isNil(code)) {
      code = (
        <code>
          {code} :: &nbsp;
        </code>
      );
    }
    if (!isNil(message)) {
      message = (
        <b>
          {message}
        </b>
      );
    }
    if (!isNil(stack)) {
      const trace = (
        <Message.List>
          {stack.map(s =>
            <Message.Item key={yeast()} as="pre" style={{ fontSize: "75%" }}>
              {s}
            </Message.Item>
          )}
        </Message.List>
      );
      stack = (
        <div>
          <Divider />
          <Accordion
            panels={[
              {
                key: "stack-trace",
                title: <Label color="red" content="stack trace" />,
                content: trace
              }
            ]}
          />
        </div>
      );
    }
    return (
      <div id={this.props.id} style={this.props.styles}>
        <Message error color="red" onDismiss={this.props.handleClose}>
          <Message.Header>
            <Icon name="warning sign" /> {error.name}
          </Message.Header>
          <Message.Content>
            <div>
              {code}
              {message}
            </div>
            {stack}
          </Message.Content>
        </Message>
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
      const { error } = this.props;

      if (isNil(error) || (isArray(error) && isEmpty(error))) {
        return;
      }
      if (isArray(error)) {
        error.map(err => Alert.error("error", { customFields: { error } }));
        return;
      }
      Alert.error("error", { customFields: { error } });
    }
    render() {
      return (
        <Alert
          stack={{ limit: 3 }}
          position="top"
          timeout={50000}
          effect="flip"
          contentTemplate={ErrorTemplate}
        />
      );
    }
  }
);
