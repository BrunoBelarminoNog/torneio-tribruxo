import { Component } from "react";
import {IoHeadsetSharp} from 'react-icons/io5'
import {gsap} from  'gsap';

import Button from "../Button";

import "./style.css"

class Intro extends Component {

    state = {
        start: this.props.start
    }

    myDiv = null

    componentDidMount() {
        console.log(this.state.start)
    }

    componentDidUpdate(_, prevState) {
        if(this.state.start === true) {
            gsap.to(this.myDiv, {duration: 2, alpha: 0})
        }
    }

    handleSate = () => {
        console.log('entrou')
        this.setState({start: true})

        setTimeout(()=> {
            this.props.funcHandleIntroStart()

        }, 2000)
    }

    render() {
        return(
            <div className="introduction" ref={div => this.myDiv = div}>
                <h2>Para melhor experiência use fone de ouvido</h2>
                <IoHeadsetSharp className="introduction-icon" />
                <p>-</p>
                <Button title="Entrar" funcHandleState={this.handleSate} />
            </div>
        )
    }
}

export default Intro;