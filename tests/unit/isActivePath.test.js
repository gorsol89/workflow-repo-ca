import { it, expect } from "vitest";
import { isActivePath } from "../../js/utils/isActivePath.js";
//console.log("typeof isActivePath =", typeof isActivePath);

// 1 test: same paths gives a true
it("returns true when paths are the same", () => {
  expect(isActivePath("/about", "/about")).toBe(true);
});

it("is true when both are /contact", () => {
  expect(isActivePath("/contact", "/contact")).toBe(true);
});

// 2 test: different paths gives a false
it("returns false when paths are different", () => {
  expect(isActivePath("/about", "/contact")).toBe(false);
});

it("is false when href is /blog and path is /about", () => {
  expect(isActivePath("/blog", "/about")).toBe(false);
});

// 3 test: '/index.html' counts as '/'
it("treats /index.html the same as /", () => {
  expect(isActivePath("/", "/index.html")).toBe(true);
});

// 4 test: prefix rule
it("returns true when current path starts with the href", () => {
  expect(isActivePath("/venue", "/venue/123")).toBe(true);
});

it("is true when href is /blog and path is /blog/2025", () => {
  expect(isActivePath("/blog", "/blog/2025")).toBe(true);
});

// 5 test: root
it("returns true for root '/' when path is exactly '/'", () => {
  expect(isActivePath("/", "/")).toBe(true);
});

it("returns false for root '/' when path is not root", () => {
  expect(isActivePath("/", "/about")).toBe(false);
});

it("is false when href is / but path is /settings", () => {
  expect(isActivePath("/", "/settings")).toBe(false);
});
