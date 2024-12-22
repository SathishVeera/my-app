import React from "react";
import { render } from "@testing-library/react";
import { ReactDom } from "react-dom";
import Button from "./button";

it("render without crashing", () => {
    const div = document.createElement('div');
    ReactDom.render(<Button></Button>, div);
});


// Jest Example:
const expected = true;
const actual = false;

const parent = true;
const child = false;

test("it works", () => {
    expect(actual).toBe(expected);
    expect(child).toBe(parent);
});
