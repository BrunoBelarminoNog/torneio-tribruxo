import { Component } from "react";
import Background from "./components/Background";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Torneio TriBruxo</h1>
        <Background />
      </div>
    );
  }
}

export default App;
