export function getUserName() {
  const raw = localStorage.getItem("user"); // might be null if nothing saved
  if (!raw) return null;

  try {
    const data = JSON.parse(raw); // parse the string into an object
    if (typeof data?.name !== "string") return null; // if no string name, treat as "no name"

    const name = data.name.trim(); // "  Ada  " -> "Ada"
    return name === "" ? null : name; // empty/only spaces => null
  } catch {
    // broken JSON -> act like there's no user
    return null;
  }
}
