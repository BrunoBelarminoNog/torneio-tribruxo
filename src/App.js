import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Background from "./components/Background";
import Intro from "./components/Introduction";

import "./styles/App.css";

import ThemeSong from "./assets/audio/themesong.mp3";
import Tournament from "./pages/Tournament";
import Header from "./components/Header";
import Characters from "./pages/Characters";

class App extends Component {
  state = {
    intro: false,
    start: false,
  };

  handleIntroStart = () => {
    const { start } = this.state;

    this.setState({ start: !start });

    setTimeout(() => {
      this.setState({ intro: true });
    }, 6000);
  };

  render() {
    const { intro, start } = this.state;

    return (
      <BrowserRouter>
        <main className="App">
          {!start ? (
            <div className="intro-container">
              <Intro
                funcHandleIntroStart={this.handleIntroStart}
                start={start}
              />
            </div>
          ) : (
            <>
              {intro && (
                <>
                <Header />
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/torneio" exact component={Tournament} />
                  <Route path="/personagens" exact component={Characters} />

                </Switch>
                </>
              )}
              <audio src={ThemeSong} type="audio/mp3" autoPlay={true} loop={true}/>
              <Background />
            </>
          )}
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
