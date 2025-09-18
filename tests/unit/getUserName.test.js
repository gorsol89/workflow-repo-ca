import { it, expect, beforeEach } from "vitest";
import { getUserName } from "../../js/utils/getUserName.js";

// reset storage between tests
beforeEach(() => {
  localStorage.clear();
});

// 1) nothing saved -> null
it("returns null when no 'user' is saved", () => {
  expect(getUserName()).toBeNull();
});

// 2) normal case -> returns the name (trimmed)
it("returns the user's name (trimmed) when saved", () => {
  localStorage.setItem("user", JSON.stringify({ name: "  Gøril  " }));
  expect(getUserName()).toBe("Gøril");
});

// 3) whitespace name -> null
it("returns null when user.name is only spaces", () => {
  localStorage.setItem("user", JSON.stringify({ name: "   " }));
  expect(getUserName()).toBeNull();
});

// 4) missing name -> null
it("returns null when user object has no name", () => {
  localStorage.setItem("user", JSON.stringify({ id: 1 }));
  expect(getUserName()).toBeNull();
});

// 5) broken JSON -> null
it("returns null when JSON is invalid (parse fails)", () => {
  localStorage.setItem("user", "{not: valid json");
  expect(getUserName()).toBeNull();
});
