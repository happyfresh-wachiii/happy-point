import React from "react";

import Footer from "./Footer";
import HomeContent from "./HomeContent";
import ResultContent from "./ResultContent";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome to Haapy points Waranya Pimsri",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>

        
       <HomeContent />
       {/* <ResultContent /> */}
        <Footer />
      </div>
    );
  }
}
