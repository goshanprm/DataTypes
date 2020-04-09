'use strict';

const countTypesInArray = array => {
  const counter = {};
  for (const element of array) {
    const type = typeof element;
    const count = counter[type] || 0;
    counter[type] = count + 1;
  }
  return counter;
};

module.exports = { countTypesInArray };
