import { _, olDT } from "../../src/main";
import { resetTestEnvironment } from "../test-utilities/reset-test-environment";

resetTestEnvironment();

describe("Check html list discrete transform function", () => {
  const fruitsList = [
    "Fruits",
    [
      "Cherry",
      "Fig",
      "Guava",
      [
        "Cherry",
        "Fig",
        "Guava",
        [
          "Cherry",
          "Fig",
          "Guava",
          [
            "Cherry",
            "Fig",
            "Guava",
            ["Cherry", "Fig", "Guava", ["Cherry", "Fig", "Guava"]],
          ],
        ],
      ],
    ],
    ["Cherry", "Fig", "Guava"],
  ];

  test("With array", (done) => {
    const { onMount, template, render } = _("App", {
      list: olDT(fruitsList),
    });

    onMount(() => {
      expect(document.body.innerHTML.replace(/[\s]/g, "")).toBe(
        "<ol><li>Fruits<ol><li>Cherry</li><li>Fig</li><li>Guava<ol><li>Cherry</li><li>Fig</li><li>Guava<ol><li>Cherry</li><li>Fig</li><li>Guava<ol><li>Cherry</li><li>Fig</li><li>Guava<ol><li>Cherry</li><li>Fig</li><li>Guava<ol><li>Cherry</li><li>Fig</li><li>Guava</li></ol></li></ol></li></ol></li></ol></li></ol></li></ol></li><ol><li>Cherry</li><li>Fig</li><li>Guava</li></ol></ol>"
      );
      done();
    });

    template(() => `$list`);

    render();
  });

  test("With Set", (done) => {
    const { onMount, template, render } = _("App", {
      list: olDT(new Set(fruitsList)),
    });

    onMount(() => {
      expect(document.body.innerHTML.replace(/[\s]/g, "")).toBe(
        "<ol><li>Fruits<ol><li>Cherry</li><li>Fig</li><li>Guava<ol><li>Cherry</li><li>Fig</li><li>Guava<ol><li>Cherry</li><li>Fig</li><li>Guava<ol><li>Cherry</li><li>Fig</li><li>Guava<ol><li>Cherry</li><li>Fig</li><li>Guava<ol><li>Cherry</li><li>Fig</li><li>Guava</li></ol></li></ol></li></ol></li></ol></li></ol></li></ol></li><ol><li>Cherry</li><li>Fig</li><li>Guava</li></ol></ol>"
      );
      done();
    });

    template(() => `$list`);

    render();
  });
});