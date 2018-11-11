import React, { Component } from "react";

const UserContext = React.createContext();
export default UserContext;

export class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      logIn: username => {
        this.setState({ username: username });
        console.log(username);
      },
      logOut: () =>
        this.setState({
          username: null,
        }),
    };
  }

  render() {
    return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
  }
}
