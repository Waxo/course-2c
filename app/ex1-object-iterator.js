const alphaObject = obj => {
  const keysArray = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keysArray.push(key);
    }
  }

  keysArray.sort();

  const returnedObject = {};

  keysArray.forEach(value => {
    returnedObject[value] = obj[value];
  });

  return returnedObject;
};

module.exports = {alphaObject};
