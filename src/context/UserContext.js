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
      firstname: null,
      lastname: null,
      email: null,
      logIn: (username, firstname, lastname, email) => {
        this.setState({
          username: username,
          firstname: firstname,
          lastname: lastname,
          email: email
        });
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
        this.setState({
          username: result.username,
          firstname: result.first_name,
          lastname: result.last_name,
          email: result.email,
          loading: false
        })
      } else {
        this.setState({loading: false})
      }
    })
  }

  render() {
    return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
  }
}
