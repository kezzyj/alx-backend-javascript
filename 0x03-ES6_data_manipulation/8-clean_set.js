const cleanSet = (set, startString) => {
  if (startString === '') return '';
  const filteredSet = [...set].filter((value) => value.startsWith(startString));
  if (!filteredSet.length) return '';
  return filteredSet.map((value) => value.slice(startString.length)).join('-');
};
export default cleanSet;
