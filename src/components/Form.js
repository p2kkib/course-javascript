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
    console.log("click say hi");
    // this.setState({message: "Hello " +this.state.name});
    this.props.onSayHi(this.state.name)
  }

  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.handleData1}/>
        <button onClick={() => this.sayHi()}>Say Hi</button>
        
      </div>
    );
  }
}

export default Form;