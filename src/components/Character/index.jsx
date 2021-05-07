import { Component } from "react";

import "./style.css"

class Character extends Component {

    render() { 
        const {name, image, house, alive} = this.props.character

        return(
            <div className="student-container">
                <div className="student-image">
                    <img src={image} alt={name} />
                </div>
                <div className="students-infos">
                    <h4>{name}</h4>
                    <p>{house}</p>
                    <p>{alive ? "Alive" : "Dead" }</p>
                </div>
            </div>
        )
    }
}

export default Character;