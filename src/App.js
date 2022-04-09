import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  state = {
    hoveredSvgColor: null,
    isRandomColorApplied: false,
  };
  colorsList = [];
  svgContainerRef;
  async componentDidMount() {
    this.getApi();
  }

  updateSvgColors = () => {
    const svg = this.svgContainer.querySelectorAll(".svg");
    if (!svg) return;
    this.props.apiResponse.forEach((val, i) => {
      const el = svg[i].querySelector("svg>g");
      if (!el) return;
      el.style.fill = this.colorsList[i];
    });
  };

  getRandomColor = () => {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  };

  getApi = () => this.props.dispatch({ type: "GET_SVG_API" });

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.isRandomColorApplied) {
      this.colorsList = this.props.apiResponse.map(() => this.getRandomColor());
      this.setState({ isRandomColorApplied: true });
      this.updateSvgColors();
    }
    if (prevState.hoveredSvgColor !== this.state.hoveredSvgColor)
      this.updateSvgColors();
  }

  changeToText = (index) => {
    if (this.colorsList[index] === this.state.hoveredSvgColor) return;
    this.setState({ hoveredSvgColor: this.colorsList[index] });
  };

  render() {
    return (
      <div className="App">
        <div
          className="logos"
          style={{ overflow: "hidden" }}
          ref={(node) => {
            this.svgContainer = node;
          }}
        >
          {this.props.apiResponse &&
            this.props.apiResponse.map((val, i) => {
              return (
                <div
                  key={i}
                  className="svg"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => this.changeToText(i)}
                >
                  {this.state.hoveredSvgColor === this.colorsList[i] ? (
                    <p> {this.state.hoveredSvgColor}</p>
                  ) : (
                    val.svg
                  )}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    apiResponse: state.apiResponse,
  };
};

export default connect(mapStateToProps)(App);
