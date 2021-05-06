import { Component } from "react";
import Background from "./components/Background";
import Button from "./components/Button";
import StudentsList from "./components/StudentsList";
import "./styles/App.css";

class App extends Component {
  state = {
    allStudents: [],
    intro: true,
    playTournament: false,
    studentsSorted: [],
  };

  componentDidMount() {
    this.getApi();
  }

  getApi = () => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((res) => res.json())
      .then((data) => this.setState({ allStudents: data }))
      .catch((error) => console.error(error));
  };

  handleStudentsSorted = () => {
    const {allStudents} = this.state;

    this.setState({
      studentsSorted: [allStudents[0], allStudents[1], allStudents[2]]
    })
  };

  handlePlayTournament = () => {
    const {playTournament} = this.state;
    this.handleStudentsSorted()

    this.setState({playTournament: !playTournament})
  }

  render() {
    const { playTournament, studentsSorted } = this.state;

    return (
      <main className="App">
        {playTournament ? (
          <StudentsList funcBackPlayTournament={this.handlePlayTournament} studentsSorted={studentsSorted}/>
        ) : (
          <div>
            <h1>Torneio TriBruxo</h1>
            <section className="tournament_container">
              <h2>Clique no botão para encontrar os feiticeiros!</h2>
              <Button title="Começar" funcHandleState={this.handlePlayTournament} />
            </section>
          </div>
        )}

        <Background />
      </main>
    );
  }
}

export default App;
