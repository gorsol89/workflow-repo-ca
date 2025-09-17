export function getUserName( {
  const value = localStorage.getItem("username");
  if (!value) return null;

  const trimmed = value.trim();
  if (trimmed === "") return null; 
  return trimmed; 
}
