import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' };
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(event) {
    this.setState(
      {
        data: this.state.data + event.key
      }
    )
  }

  render() {
    return (
      <div>
        <input type="text" onKeyPress={this.handleKeyPress}/>
        <p>Hello: {this.state.data}</p>
      </div>
    );
  }
}

export default Form;