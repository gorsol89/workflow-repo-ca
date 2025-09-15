import { it, expect } from "vitest";
import { isActivePath } from "../js/utils/isActivePath.js";

console.log("typeof isActivePath =", typeof isActivePath);

//Do /index.html and / the same way?
it("treats /index.html the same as /", () => {
  expect(isActivePath("/", "/index.html")).toBe(true);
});
