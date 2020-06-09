import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <input></input>
        <button>add</button>
        <button onClick={this.props.handleDelete}>delete</button>
      </div>
    );
  }
}
export default Form;
