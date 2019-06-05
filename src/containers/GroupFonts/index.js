import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";

import getFontsAction from "../../core/actions";

import { getFont, getFontPending, getFontIsError } from "../../core/selectors";

import Title from "../../components/Title";

import "./groupFonts.css";

class GroupFonts extends Component {
  state = {
    fontsArray: [
      { value: "Roboto", label: "Roboto" },
      { value: "Arial", label: "Arial" },
      { value: "Helvetica", label: "Helvetica" },
      { value: "DejaVu Sans Mono", label: "DejaVu Sans Mono" },
      { value: "Comic Sans MS", label: "Comic Sans MS" },
      { value: "Impact", label: "Impact" }
    ],
    currentFont: "Roboto",
    fontValue: ""
  };

  // Для получения с сервера
  // componentDidMount() {
  //   this.props.getFonts();
  // }

  handleChangeSelect = currentFont => {
    this.setState({ currentFont });
  };

  handleChangeInput = e => {
    this.setState({ fontValue: e.target.value });
  };

  addFont = () => {
    const { fontValue } = this.state;
    if (fontValue.length < 1) return alert("Введено пусто значение");
    else {
      this.setState(prevState => ({
        fontsArray: [
          ...prevState.fontsArray,
          { value: fontValue, label: fontValue }
        ],
        fontValue: ""
      }));
    }
  };
  render() {
    const { currentFont, fontValue } = this.state;
    return (
      <div>
        <Title h2="Первая часть" />
        <div className="group-fonts__ui-elements">
          <input
            type="text"
            className="ui-elements__input"
            placeholder="Введите шрифт"
            value={fontValue}
            onChange={this.handleChangeInput}
          />
          <button
            className="ui-elements__input input-button"
            onClick={this.addFont}
          >
            Добавить
          </button>
          <Select
            value={currentFont}
            onChange={this.handleChangeSelect}
            options={this.state.fontsArray}
          />
        </div>

        <p style={{ fontFamily: currentFont.value }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          porttitor dapibus blandit. Nunc nec massa ut metus gravida mollis
          vitae at purus. Etiam tempor nisl nec velit ullamcorper, sed
          pellentesque mauris aliquet. Phasellus commodo viverra fermentum.
          Fusce eget luctus nisl. Quisque quis enim nec augue lacinia blandit.
          Nunc at enim egestas, interdum velit et, ultrices sapien. Praesent
          vulputate ligula nec lorem interdum molestie.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fonts: getFont(state),
  isPendingFonts: getFontPending(state),
  isErrorFonts: getFontIsError(state)
});

const mapDispatchToProps = dispatch => {
  return {
    getFonts: path => {
      dispatch(getFontsAction(path));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupFonts);
