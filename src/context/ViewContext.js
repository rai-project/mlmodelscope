import React, { Component } from "react";
import { enquireScreen } from "enquire-js";
// import { enquireIsMobile } from "./enquireScreen";

const ViewContext = React.createContext();
export default ViewContext;

let isMobile;
enquireScreen(b => {
  isMobile = b;
});

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
    });
  }

  // componentDidMount() {
  //     this.unregisterEnquire = enquireIsMobile(ismobile => {
  //         const { isMobile } = this.state;
  //         if (isMobile !== ismobile) {
  //             this.setState({
  //                 isMobile: ismobile
  //             });
  //         }
  //     });
  // }
  render() {
    return (
      <ViewContext.Provider value={this.state}>
        {this.props.children}
      </ViewContext.Provider>
    );
  }
}
