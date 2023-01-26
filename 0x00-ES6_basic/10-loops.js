export default function appendToEachArrayValue(array, appendString) {
  const all = [];
  for (let idx of array) {
    idx = appendString + idx;
    all.push(idx);
  }

  return array;
}
