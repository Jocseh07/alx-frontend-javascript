export default function cleanSet(set, startString) {
  const result = [];
  if (typeof set !== 'object') return '';
  if (typeof startString !== 'string') return '';
  if (startString.length === 0) return '';
  for (const value of set) {
    if (value && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }
  return result.join('-');
}
