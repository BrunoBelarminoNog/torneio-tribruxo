import { Component } from "react";
import Button from "../Button";
import Student from "../Student";

import "./style.css";

class StudentsList extends Component {

    render() {
        const {funcBackPlayTournament, studentsSorted} = this.props
        return(
            <section className="studentsList-container">
                <div>
                {
                    studentsSorted.map((student, index) => <Student key={index} student={student} />)
                }
                </div>
                <Button title="Tentar Novamente" funcHandleState={funcBackPlayTournament} />
            </section>
        )
    }
}

export default StudentsList;