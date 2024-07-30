const updateUniqueItems = (map) => {
  const newMap = map;
  if (!(newMap instanceof Map)) throw new Error('Cannot process');

  newMap.forEach((value, key) => {
    if (value === 1) map.set(key, 100);
  });
  return newMap;
};

export default updateUniqueItems;
