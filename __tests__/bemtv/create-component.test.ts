import { Component, hasComponent } from "../../src/main";

describe("Creating a component", () => {
  it("Should create a component", () => {
    Component("HelloWorld", () => `Hello world!`);
    expect(hasComponent("HelloWorld")).toBeTruthy();
  });
  it("Should not create a component", () => {
    expect(() => Component("HelloWorld", () => `Hello world!`)).toThrow();
  });
});