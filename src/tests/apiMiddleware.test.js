import mockFetch from "../api/mockFetch";
import apiMiddleware from "../store/apiMiddleware";
window.fetch = mockFetch;

describe("testing apiMiddleware", () => {
  test("should call api", async () => {
    expect.assertions(1);
    const dispatch = jest.fn();
    const middleware = apiMiddleware();
    try {
      const data = middleware(dispatch);
      return data({ type: "GET_SVG_API" }).then((data) => {
        expect(data.images.length).toBe(5);
      });
    } catch (e) {
      console.log(e.message);
    }
  });
});
