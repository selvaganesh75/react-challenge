const defaultState = {
  apiResponse: null,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case "STORE_SVG": {
      return { ...state, apiResponse: action.payload };
    }
    default:
      return state;
  }
}
