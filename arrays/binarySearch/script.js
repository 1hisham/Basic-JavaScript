// BINARY SEARCH
let array = [8, 6, 45, 2, 58, 3, 69, 5, 421, 35, 78, 25, 57];
function sorting(array) {
  let i = 0;
  while (i < array.length) {
    let j = i + 1;
    while (j < array.length) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      j++;
    }
    i++;
  }
  return array;
}

function binarySearch(array, seachNumber) {
  array = sorting(array);
  let startingPoint = Math.ceil(array.length / 2);
  let endingPoint = array.length;
  let run = Math.ceil(Math.log2(array.length));
  let i = 0;
  console.log(array);

  while (i < run) {
    console.log(startingPoint, endingPoint);
    if (array[startingPoint] == seachNumber) {
      console.log("find at", startingPoint);
      return true;
    }
    if (array[startingPoint] < seachNumber) {
      startingPoint = parseInt(Math.floor(startingPoint + endingPoint) / 2);
    } else {
      let differ = Math.ceil((endingPoint - startingPoint) / 2);
      endingPoint = startingPoint;
      startingPoint = endingPoint - differ;
    }
    i++;
  }
  return false;
}

console.log(binarySearch(array, 6));
