export function isActivePath(href, currentPath) {
  if (!href || !currentPath) return false;

  const norm = (p) => (p === "/index.html" ? "/" : p);
  const h = norm(href);
  const c = norm(currentPath);

  if (h === "/") return c === "/";
  if (c === h) return true;
  return c.startsWith(h);
}
