import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

test("renders correctly", () => {
    const component = renderer.create(
        <App />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});