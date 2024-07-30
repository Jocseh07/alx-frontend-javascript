export default function cleanSet(set, startString) {
  const result = [];
  if (startString.length === 0) return '';
  if (typeof startString !== 'string') return '';
  if (typeof set !== 'object') return '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }
  return result.join('-');
}
