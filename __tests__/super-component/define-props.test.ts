import { Component } from "../../src/main";

it("Should pass the props to the child component", (done) => {
  Component("Child").template`$props.message`;

  const { defineProps, onMount, template, render } = Component("App");

  let p = defineProps({ message: "Hey!" });

  onMount(() => {
    expect(document.body?.textContent?.trim()).toBe("Hey!");
    done();
  });

  template(() => `Child${p}[]`);

  render();
});