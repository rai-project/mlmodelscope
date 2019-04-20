import React, { Component } from "react";
import { UserInfo } from "../swagger";

const UserContext = React.createContext();
export default UserContext;

export class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      username: null,
      logIn: username => {
        this.setState({ username: username });
        console.log(username);
      },
      logout: () =>
        this.setState({
          username: null,
        }),
    };
  }

  componentWillMount() {
    this.setState({loading: true})
    UserInfo({})
    .then(result =>{
      if (result.outcome === "success") {
        this.setState({username: result.username, loading: false})
      } else {
        this.setState({loading: false})
      }
    })
  }

  render() {
    return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
  }
}
