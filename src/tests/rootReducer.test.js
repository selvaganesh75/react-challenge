import reducer from "../store/rootReducer";

describe("testing rootreducer", () => {
  test("data requested", () => {
    const initialState = { apiResponse: null };
    const action = {
      type: "STORE_SVG",
      payload: [{ svg: "svg1" }, { svg: "svg2" }],
    };
    expect(reducer(initialState, action)).toEqual({
      apiResponse: [{ svg: "svg1" }, { svg: "svg2" }],
    });
  });
});
