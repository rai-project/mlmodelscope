import { connect } from "cerebral/react";
import { state } from "cerebral/tags";
import React from "react";
import { Sidebar, Header, Segment } from "semantic-ui-react";

export default connect(
  {
    isLoggedIn: state`user.isLoggedIn`
  },
  class App extends React.Component {
    render() {
      let { isLoggedIn } = this.props;

      return (
        <div className="page-layout">
          <Sidebar.Pushable as={Segment}>
            {isLoggedIn && <Sidebar />}
            <Sidebar.Pusher>
              <Header as="h1">CarML</Header>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      );
    }
  }
);
