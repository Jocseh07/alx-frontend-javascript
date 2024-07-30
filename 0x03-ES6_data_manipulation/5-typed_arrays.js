export default function createInt8TypedArray(length, position, value) {
  const int8View = new Int8Array(length);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  int8View[position] = value;
  return int8View;
}
