import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <div class="col-lg-12">
          <span>Please enter your email into text area  : </span>
          <input value={this.props.title} onChange={this.handleChange.bind(this)} />
        </div>
       
      </div>
    );
  }
}
