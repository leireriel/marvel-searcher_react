export function orderCharacters(a, b) {
  if (a.heroName > b.heroName) {
    return 1;
  }
  if (a.heroName < b.heroName) {
    return -1;
  }
  return 0;
}
