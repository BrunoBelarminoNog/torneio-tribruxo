import { Component } from "react";
import { gsap } from "gsap";
import Button from "../Button";
import Character from "../Character";

import "./style.css";

class CharactersList extends Component {
  myCharacters = [];
  myButtons = null

  state = {
    characters: this.props.characters,
  };

  componentDidMount() {
    const {characters} = this.state;
    

    setTimeout(() => {
      gsap.to(this.myCharacters, {
        translateY: 0,
        opacity: 1,
        stagger: {
          amount: 1,
        },
        delay: 0,
      });

      
    }, 500);

    gsap.from(this.myButtons, {
      duration: 1, 
      delay: .6,
      opacity: 0,
      translateY: 50
    })
  }

  componentDidUpdate() {
    const {characters} = this.state;

    
    gsap.set(this.myCharacters, {opacity: 0, translateY: 50})
    setTimeout(() => {
      gsap.to(this.myCharacters, {
        translateY: 0,
        opacity: 1,
        stagger: {
          amount: 1,
        },
      });
    }, 1000);
  }

  render() {
    const {
      funcBackPlayTournament,
      characters,
      funcHandleStudentsSorted,
      allCharacters,
    } = this.props;
    return (
      <section className="studentsList-container">
        <div>
          {characters.map((character, index) => {
            return (
              <div
                key={index}
                ref={(div) => (this.myCharacters[index] = div)}
                className="div-animation"
              >
                <Character character={character} />
              </div>
            );
          })}
        </div>
        {!allCharacters && (
          <div className="buttons" ref={div => this.myButtons = div}>
            <Button
              title="Voltar"
              funcHandleState={funcBackPlayTournament}
              link="/"
            />
            <Button
              title="Tentar Novamente"
              funcHandleState={funcHandleStudentsSorted}
            />
          </div>
        )}
      </section>
    );
  }
}

export default CharactersList;
