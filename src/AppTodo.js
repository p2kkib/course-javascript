import logo from './logo.svg';
import './App.css';

import { Component } from "react";
import Form from "./components/Form";

class AppTodo extends Component {

  constructor(){
    super()
    this.state = {x: 0, y:0, items: []}
    this.updateValue = this.updateValue.bind(this)

  }

  calTotal(){
    var doneItem = 0;
    var totalItem = this.state.items.length;

    Array.from(document.querySelectorAll("li")).forEach(
        myItem => {
            if(myItem.className === 'done'){
                doneItem++;
            }
        }
      );
    this.setState({
        x: totalItem - doneItem,
        y: totalItem
    });

  }

  handleClick(e) {
    console.log(e.target.getAttribute("data-index")); //will log the index of the clicked item
    e.target.classList.toggle('done');
    this.calTotal();
}

  updateValue(input){
    var joined = this.state.items.concat(input);
    this.setState({ items: joined }, () => {
        this.calTotal();
    })
  }


  render() {
    return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <div>
        <Form onSayHi={this.updateValue}/>
        <p>{this.state.x} remaining out of {this.state.y} tasks</p>

        <ul>
          {this.state.items.map((item, index) => {
            return <li key={index} data-index={index} onClick={(e) => this.handleClick(e)}>{item}</li>;
          })}
        </ul>

      </div>


      </header>
    </div>
    );
  }
}

export default AppTodo;