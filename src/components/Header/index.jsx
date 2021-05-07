import { Component } from "react";
import { NavLink } from "react-router-dom";
import {gsap} from 'gsap';

import "./style.css";

class Header extends Component {
  myHeader = null
  myLogo = null
  myNav = []

  componentDidMount() {
    gsap.timeline()
      .from(this.myHeader, {duration: 1, translateX: -2000})
      .to(this.myHeader, {duration: 1, backgroundColor: "#000000be"})
      .from(this.myLogo, {duration: 1, opacity: 0})
      .from(this.myNav, {duration: 1.5, translateY: -400, stagger: {
        amount: .5
      }}, "-=2")
  }

  render() {
    return (
      <header ref={header => this.myHeader = header}>
        <div className="header-container">
          <div className="logo" ref={div => this.myLogo = div}>HP</div>

          <nav >
            <NavLink to="/" exact activeClassName={'active'} ref={nav => this.myNav[0] = nav}>Ínicio</NavLink>
            <NavLink to="/torneio" exact activeClassName={'active'} ref={nav => this.myNav[1] = nav}>Torneio</NavLink>
            <NavLink to="/personagens" exact activeClassName={'active'} ref={nav => this.myNav[2] = nav}>Personagens</NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
