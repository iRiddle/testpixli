import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./core/store";

import GropupShapes from "./containers/GroupShapes";
import GroupFonts from "./containers/GroupFonts";

import Title from "./components/Title";

import "./app.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Title h1="Тестовое задание" />
          <GroupFonts />
          <GropupShapes />
        </div>
      </Provider>
    );
  }
}

export default App;
