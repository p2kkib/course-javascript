import logo from './logo.svg';
import './App.css';

import { Component } from "react";
import Clock from "./components/Clock";
import Form from "./components/Form";
import User from "./components/User";

class App extends Component {
  users = [
    { id: 1, name: "User 01", age: 10 },
    { id: 2, name: "User 02", age: 20 },
    { id: 3, name: "User 03", age: 30 },
  ];

  constructor(){
    super()
    this.state = {message: ""}
    this.updateValue = this.updateValue.bind(this)
  }
  updateValue(input){
    this.setState({ message: "New section : " + input });
  }
  render() {
    return (

    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <div>
        <User users={this.users} />
        <Clock title="Current data naja = " />
        <Form onSayHi={this.updateValue}/>
        <p>{this.state.message}</p>
      </div>


      </header>
    </div>
    );
  }
}

export default App;