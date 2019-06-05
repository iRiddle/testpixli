import React, { Component } from "react";
import cx from "classnames";

import "./shape.css";

class Shape extends Component {
  render() {
    const { onClick, currentShape, id, currentColor, color } = this.props;
    console.log(currentColor);
    return (
      <div
        className={cx("shape", {
          shapeHightlighted: currentShape === id
        })}
        style={{
          backgroundColor: color
        }}
        onClick={onClick}
      />
    );
  }
}

export default Shape;
