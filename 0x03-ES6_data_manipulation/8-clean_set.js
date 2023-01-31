const cleanSet = (set, startString) => {
  const filteredSet = [...set].filter((value) => value.startsWith(startString));
  if (!filteredSet.length) return '';
  return filteredSet.map((value) => value.slice(startString.length)).join('-');
};
export default cleanSet;
