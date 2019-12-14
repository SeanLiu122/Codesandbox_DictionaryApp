import React, { Component } from "react";

class DisplayField extends Component {
  render() {
    const listItems = [];
    this.props.dictionary.forEach(word => {
      listItems.push(
        <li key={word}>
          {word} <button>Delete</button>
        </li>
      );
    });
    return <ul>{listItems}</ul>;
  }
}

export default DisplayField;
