import { Component } from "react";
import CharactersList from "../../components/CharactersList";


class Tournament extends Component {
    state = {
        allStudents: [],
        studentsSorted: [],
      };
    
      componentDidMount() {
        this.getApi();
      }
    
      getApi = () => {
        fetch("https://hp-api.herokuapp.com/api/characters/students")
          .then((res) => res.json())
          .then((data) => {
            this.setState({ allStudents: data });
            this.handleStudentsSorted();
          })
          .catch((error) => console.error(error));
      };
    
      handleStudentsSorted = () => {
        const { allStudents } = this.state;
    
        if (allStudents.length === 0) {
          return;
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
    
    render() {
        const { studentsSorted } = this.state;

        return(
            <CharactersList
                funcBackPlayTournament={this.handlePlayTournament}
                characters={studentsSorted}
                funcHandleStudentsSorted={this.handleStudentsSorted}
            />
        )
    }
}

export default Tournament;