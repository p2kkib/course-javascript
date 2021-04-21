import logo from './logo.svg';
import './App.css';
import Clock from "./components/Clock";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ul>
          <User info="User 01" age="30" />
          <User info="User 02" />
          <User info="User 03" />
        </ul>
        <Clock title="Current data naja = " />

      </header>
    </div>
  );
}

export default App;
