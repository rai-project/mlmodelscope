import React, { Component } from "react";
import { enquireScreen } from "enquire-js";

const ViewContext = React.createContext();
export default ViewContext;

const mobileQuery = "only screen and (max-width: 840.99px)";

let isMobile;
enquireScreen(b => {
  isMobile = b;
}, mobileQuery);

export class ViewProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: isMobile,
    };
  }

  componentDidMount() {
    enquireScreen(b => {
      this.setState({ isMobile: !!b });
    }, mobileQuery);
  }

  render() {
    return (
      <ViewContext.Provider value={this.state}>
        {this.props.children}
      </ViewContext.Provider>
    );
  }
}
