import { Component } from "react";
import { gsap } from 'gsap';
import Button from '../Button'

import "./style.css"

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.initialDiv = null
    }

  componentDidMount() {
    gsap
        .from(this.initialDiv, {opacity: 0, duration: 1, delay: .25})
  }

  render() {
    const {funcHandlePlayTournament} = this.props

    return (
      <div ref={(div) => (this.initialDiv = div)} className="home-container">
        <div >
            <h1>Torneio TriBruxo</h1>
            <section className="tournament_container">
            <h2>Clique no botão para encontrar os feiticeiros!</h2>
            <Button title="Começar" funcHandleState={funcHandlePlayTournament} />
            </section>
        </div>
      </div>
    );
  }
}

export default Home;
