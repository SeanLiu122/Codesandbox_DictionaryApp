import React, { Component } from "react";

class InputField extends Component {
  render() {
    return (
      <form>
        <label>
          <input type="text" placeholder="Enter a word..." />{" "}
          <input type="submit" value="Submit" />
        </label>
      </form>
    );
  }
}

export default InputField;
