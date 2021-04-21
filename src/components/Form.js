import { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = { name: '',message: '' };
    this.handleData1 = this.handleData.bind(this)
  }

  handleData(event) {
    this.setState({name: event.target.value});
  }

  sayHi(){
    this.props.onSayHi(this.state.name)
    this.setState({name: ''});
    
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  }

  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.handleData1} />
        <button onClick={() => this.sayHi()}>Add</button>
        
      </div>
    );
  }
}

export default Form;