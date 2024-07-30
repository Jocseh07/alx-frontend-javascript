export default function createInt8TypedArray(length, index, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  if (index < 0 || index >= length) {
    throw new Error('Index outside range');
  }

  view.setInt8(index, value);
  return view;
}
