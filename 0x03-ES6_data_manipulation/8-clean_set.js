export default function cleanSet(set, startString) {
  const result = [];
  if (
    startString.length === 0 ||
    typeof startString !== 'string' ||
    typeof set !== 'object'
  ) {
    return '';
  }
  for (const value of set) {
    if (value && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }
  return result.join('-');
}
