export default function hasValuesFromArray(set, list) {
  for (const value of list) {
    if (!set.has(value)) {
      return false;
    }
  }
  return true;
}
