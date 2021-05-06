import { Component } from "react";

import "./style.css"

class Student extends Component {

    render() { 
        const {name, image, house, ancestry} = this.props.student

        return(
            <div className="student-container">
                <div className="student-image">
                    <img src={image} alt={name} />
                </div>
                <div className="students-infos">
                    <h4>{name}</h4>
                    <p>{house}</p>
                    <p>{ancestry}</p>
                </div>
            </div>
        )
    }
}

export default Student;