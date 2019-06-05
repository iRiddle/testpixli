import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";

const logger = createLogger({
  collapsed: true
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

export default store;