import { Component } from "react";
import {TweenLite} from 'gsap';
import Background from "./components/Background";
import Intro from "./components/Introduction";
import StudentsList from "./components/StudentsList";
import "./styles/App.css";
import Home from "./components/Home";

class App extends Component {
  state = {
    allStudents: [],
    intro: false,
    playTournament: false,
    studentsSorted: [],
    start: false,
  };


  componentDidMount() {
    this.getApi();
  }

  getApi = () => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ allStudents: data });
        this.handleStudentsSorted();
      })
      .catch((error) => console.error(error));
  };

  handleStudentsSorted = () => {
    const { allStudents } = this.state;

    if(allStudents.length === 0) {
      return
    }

    let studentsSorted = [];
    sorted();

    function sorted() {
      let randomNumber = Math.floor(Math.random() * allStudents.length);

      if (studentsSorted.length === 0) {
        studentsSorted.push(allStudents[randomNumber]);
        console.log(studentsSorted);
        sorted();
      }

      let student = allStudents[randomNumber];

      if (!studentsSorted.includes(student)) {
        let control = false;
        studentsSorted.forEach((el) => {
          if (student.house === el.house) {
            control = true;
          }
        });

        control ? sorted() : studentsSorted.push(student);
      }

      if (studentsSorted.length < 3) sorted();
    }

    this.setState({
      studentsSorted: [...studentsSorted],
    });
  };

  handlePlayTournament = () => {
    const { playTournament } = this.state;

    if (!playTournament) {
      this.handleStudentsSorted();
    }

    this.setState({ playTournament: !playTournament });
  };

  handleIntroStart = () => {
    const { start } = this.state;

    this.setState({ start: !start });


    setTimeout(() => {
      this.setState({ intro: true });
    }, 6000)

    console.log("start");
  };

  render() {
    const { playTournament, studentsSorted, intro, start } = this.state;

    return (
      <main className="App">
        {!start ? (
          <div className="intro-container">
            <Intro funcHandleIntroStart={this.handleIntroStart} start={start} />
          </div>
        ) : (
          <>
              {
                intro && (
                  <>
                  {playTournament ? (
                    <StudentsList
                      funcBackPlayTournament={this.handlePlayTournament}
                      studentsSorted={studentsSorted}
                    />
                  ) : (
                    <Home funcHandlePlayTournament={this.handlePlayTournament} />
                  )}
                  </>
                )
              }
              
            <Background start={start} />
          </>
        )}
      </main>
    );
  }
}

export default App;
