const alphaObject = obj => {
  const keysArray = [];
  for (const key in obj) {
    /* istanbul ignore else */
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

// TODO https://github.com/Waxo/course-2c.git