import React, { Component } from "react";

import InputField from "../components/Inputs/InputField";
import DisplayField from "../components/DisplayField";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionary: ["Bloodborne", "React", "manifest"]
    };
  }
  render() {
    return (
      <div>
        <InputField />
        <DisplayField dictionary={this.state.dictionary} />
      </div>
    );
  }
}

export default Home;
