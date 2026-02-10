/**
 * Returns the localized Pokémon name based on language.
 * Supports either:
 *  - a string (already localized), or
 *  - an object like { english, french, japanese, chinese, ... }
 */
export function getLocalizedName(name, lang) {
  if (!name) return "";
  if (typeof name === "string") return name;

  const key = (lang || "english").toLowerCase();
  // try exact key, then common fallbacks
  return (
    name[key] ||
    name.english ||
    name.french ||
    name.japanese ||
    name.chinese ||
    ""
  );
}
