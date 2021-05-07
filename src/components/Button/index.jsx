import { Component } from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

class Button extends Component {
  render() {
    const { funcHandleState, link, title } = this.props;

    return (
      <>
        {link ? (
          <>
            <button type="button" className="button-container">
              <NavLink to={link}>{title}</NavLink>
            </button>
          </>
        ) : (
          <button
            type="button"
            className="button-container"
            onClick={(e) => funcHandleState(e)}
          >
            {title}
          </button>
        )}
      </>
    );
  }
}

export default Button;
