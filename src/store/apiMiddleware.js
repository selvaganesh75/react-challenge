export default function () {
  return (next) => (action) => {
    switch (action.type) {
      case "GET_SVG_API": {
        return fetch().then((data) => {
          next({ type: "STORE_SVG", payload: data.images });
          return data;
        });
      }
      default:
        return next(action);
    }
  };
}
