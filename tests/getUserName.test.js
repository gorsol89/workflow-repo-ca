import { it, expect, beforeEach } from "vitest";

import { getUserName } from "../js/utils/getUserName.js";

beforeEach(() => {
  localStorage.clear();  //note: will reset localstorage before test
});


//Test 1 - nothing saved will and get back null

it("returns null when 'username' is not in localStorage", () => {     
  expect(getUserName()).toBeNull();
});


//Test 2 - saved name returns that name

it("returns the stored username string", () => {
  localStorage.setItem("username", "Gøril");
  expect(getUserName()).toBe("Gøril");
});

//Test 3 - whitespace will give back null

