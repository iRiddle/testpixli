import React, { Component } from "react";
import PropTypes from "prop-types";
import { CirclePicker } from "react-color";

import Shape from "../../components/Shape";
import Title from "../../components/Title";

import "./groupShapes.css";

class GroupShapes extends Component {
  state = {
    reactanglesOptions: [
      { id: 1, color: "#000000" },
      { id: 2, color: "#000000" },
      { id: 3, color: "#000000" },
      { id: 4, color: "#000000" },
      { id: 5, color: "#000000" }
    ],
    currentColor: "#000000",
    currentShape: 0
  };

  handleGetCurrentIdCard = id => {
    this.setState({
      currentShape: id
    });
  };
  changeBackgroundColor = color => {
    const { currentShape, reactanglesOptions } = this.state;
    if (currentShape === 0) return alert("Выберите фигуру");

    const prevRectanglesOptions = reactanglesOptions.map(rectangle =>
      rectangle.id === currentShape
        ? { ...rectangle, color: color.hex }
        : { ...rectangle }
    );

    this.setState({
      reactanglesOptions: prevRectanglesOptions
    });
  };
  render() {
    const { reactanglesOptions, currentShape, currentColor } = this.state;
    return (
      <div className="group-shapes">
        <Title h2="Вторая часть" />
        <CirclePicker onChange={this.changeBackgroundColor} />
        <div className="groupContainer">
          {reactanglesOptions.map(reactangle => (
            <Shape
              key={reactangle.id}
              id={reactangle.id}
              color={reactangle.color}
              onClick={() => this.handleGetCurrentIdCard(reactangle.id)}
              currentShape={currentShape}
              currentColor={currentColor}
            />
          ))}
        </div>
      </div>
    );
  }

  static propTypes = {
    prop: PropTypes
  };
}

export default GroupShapes;
