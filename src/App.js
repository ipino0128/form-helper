import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form.js";

class App extends React.Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleDelete = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    let forms = [];
    for (var i = 0; i < this.state.counter; i++) {
      forms.push(<Form key={i} handleDelete={this.handleDelete} />);
    }

    return (
      <div className="App">
        <h3>Form</h3>
        <button onClick={this.handleClick}>Add new step</button>
        {forms}
      </div>
    );
  }
}

export default App;
