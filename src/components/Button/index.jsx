import { Component } from "react";

import "./style.css";

class Button extends Component {
  render() {
    const { funcHandleState } = this.props;

    return (
      <button type="button" className="button-container" onClick={(e) => funcHandleState(e)}>
        {this.props.title}
      </button>
    );
  }
}

export default Button;
