import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

// show us some tests for your solution!

it("renders without crashing", () => {
  /***

  *  Testing UI Needs to install Enzyme or test renderer

  ****/

  const app = new App({ store: jest.fn() });
  console.log(app);
});
