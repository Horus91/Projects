let _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(Math.min(lowerClampedValue, upper));
    return clampedValue;
  },
  inRange(number, start, end = 0) {
    let trueEnd;
    let trueStart;
    if (end < start) {
      trueStart = end;
      trueEnd = start;
    } else {
      trueEnd = end;
      trueStart = start;
    }
    let isInRange = number >= trueStart && number < trueEnd;
    return isInRange;
  },
  words(str) {
    return str.split(" ");
  },
  pad(str, charNum) {
    if (charNum <= str.length) {
      console.log(str);
      return str;
    } else {
      const targetLength = charNum - str.length;
      const sPad = Math.floor(targetLength / 2);
      const ePad = Math.ceil(targetLength / 2);
      return " ".repeat(sPad) + str + " ".repeat(ePad);
    }
  },
  has(object, key) {
    return object[key] != undefined;
  },
  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(object, func) {
    for (const key in object) {
      if (func(object[key]) === true) {
        console.log(key);
        return key;
      } else {
        return undefined;
      }
    }
  },
  drop(array, num) {
    if (num === undefined) {
      array.splice(0, 1);
    } else {
      array.splice(0, num);
    }
    return array;
  },
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex(function (element, index) {
      return !predicate(element, index, array);
      return index;
    });
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size) {
    let newArray = [];
    let i = 0;
    while (i < array.length) {
      let tempArray = array.slice(i, i + size);
      newArray.push(tempArray);
      i += size;
    }
    return newArray;
  },
};

//do not modify code below this line
module.exports = _;
