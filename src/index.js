import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import mockFetch from "./api/mockFetch";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/rootReducer";
import apiMiddleware from "./store/apiMiddleware";

window.fetch = mockFetch;

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(apiMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App dispatch={store.dispatch} />
  </Provider>,
  document.getElementById("root")
);

export const renderToElement = (element, container) => {
  return ReactDOM.render(
    <Provider store={store}>{element}</Provider>,
    document.getElementById("root")
  );
};
registerServiceWorker();
