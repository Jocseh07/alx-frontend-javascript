export default function createInt8TypedArray(length, index, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  try {
    view.setInt8(index, value);
  } catch (error) {
    throw new Error('Position outside range');
  }

  return view;
}
