var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


function addElementToBeginningOfArray(array, element) {
  const newArray = [element, ...array];
  return newArray;
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}


function addElementToEndOfArray(array, element) {
  const newArray = array.push(element);
  return newArray;
}


function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
}


function accessElementInArray(array, indexNumber) {
  return array[indexNumber];
}
