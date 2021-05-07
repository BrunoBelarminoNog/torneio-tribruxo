import { Component } from "react";
import {gsap} from 'gsap';
import CharactersList from "../../components/CharactersList";

import "./style.css";

class Characters extends Component {
  state = {
    allCharacters: [],
    filter: "",
  };

  myDivFilters = null

  componentDidMount() {
    this.getApi("");

    gsap.from(this.myDivFilters, {
      duration: .5,
      opacity: 0,
      translateY: -20
    })

  }

  getApi = (search) => {
    fetch(`https://hp-api.herokuapp.com/api/characters/${search}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ allCharacters: data });
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  filterCharacters = (filter) => {
    if (filter === "students") {
      this.getApi("students");
    } else if (filter === "staff") {
      this.getApi("staff");
    } else if (filter === "gryffindor") {
      this.getApi("house/gryffindor");
    } else if (filter === "slytherin") {
      this.getApi("house/slytherin");
    } else if (filter === "ravenclaw") {
      this.getApi("house/ravenclaw");
    } else if (filter === "hufflepuff") {
      this.getApi("house/hufflepuff");
    } else {
      this.getApi("");
    }
    this.setState({ filter: filter });
  };

  render() {
    const { allCharacters, filter } = this.state;
    return (
      <section className="characters-container">
        <div ref={div => this.myDivFilters = div} className="filters-container">
          <h1>Encontre seu personagem favorito</h1>
          <div className="filters-characters">
            <ul>
              <li
                onClick={() => this.filterCharacters("")}
                className={filter === "" && "filter-active"}
              >
                Todos
              </li>
              <li
                onClick={() => this.filterCharacters("students")}
                className={filter === "students" && "filter-active"}
              >
                Alunos
              </li>
              <li
                onClick={() => this.filterCharacters("staff")}
                className={filter === "staff" && "filter-active"}
              >
                Professores
              </li>
              <li
                onClick={() => this.filterCharacters("gryffindor")}
                className={filter === "gryffindor" && "filter-active"}
              >
                Gryffindor
              </li>
              <li
                onClick={() => this.filterCharacters("slytherin")}
                className={filter === "slytherin" && "filter-active"}
              >
                Slytherin
              </li>
              <li
                onClick={() => this.filterCharacters("hufflepuff")}
                className={filter === "hufflepuff" && "filter-active"}
              >
                Hufflepuff
              </li>
              <li
                onClick={() => this.filterCharacters("ravenclaw")}
                className={filter === "ravenclaw" && "filter-active"}
              >
                Ravenclaw
              </li>
            </ul>
          </div>
        </div>
        <div className="characters">
          <CharactersList characters={allCharacters} allCharacters={true} />
        </div>
      </section>
    );
  }
}

export default Characters;
