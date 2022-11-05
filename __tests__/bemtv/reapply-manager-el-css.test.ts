import { Component } from "../../src/main";
import { resetTestEnvironment } from "../test-utilities//reset-test-environment";

resetTestEnvironment();

describe(`
   Checks the reapplication of CSS classes to the element of the “ManagerEl.it” property
`, () => {
  it("Should reapply the class inserted via the “ManagerEl.css()” method", (done) => {
    const { useEl, onMount, onUpdate, template, render } = Component("App");

    const [key, el] = useEl();

    let t = `span[${key} Hey!]`;

    onMount(() => {
      const appEl = el();
      appEl.css`color:blue;`;

      t = `span[${key} Hi!]`;
    });

    onUpdate(() => {
      const appEl = el();

      expect(
        window.getComputedStyle(appEl.it as Element).getPropertyValue("color")
      ).toBe("blue");
      done();
    });

    template(() => t);

    render();
  });

  it(`
     Should apply the class inserted through the “ManagerEl.css()” method to the new element
  `, (done) => {
    const { useEl, onMount, onUpdate, template, render } = Component("App");

    const [key, el] = useEl();

    let t = `span[${key} Hey!]`;

    onMount(() => {
      const appEl = el();
      appEl.css`color:blue;`;

      t = `strong[${key} Hey!]`;
    });

    onUpdate(() => {
      const appEl = el();

      expect(
        window.getComputedStyle(appEl.it as Element).getPropertyValue("color")
      ).toBe("blue");
      done();
    });

    template(() => t);

    render();
  });
});
