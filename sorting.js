// Selection Sort - find smallest value, swap it to the front of the array & then repeat
let selectionSort = (input) => {
  let temp;

  for (let i = 0; i < input.length; i++) {  // sort input into increasing order
    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < input[i]) {  // swaps the values to the front
        temp = input[j];
        input[j] = input[i];
        input[i] = temp;
      }
    }
  }
  return input;
}

// Insertion Sort - place unsorted values one by one into correct spot in sorted array section
let insertionSort = (input) => {
  let temp;

  for (let i = 1; i < input.length; i++) {
    for (let j = i; j > 0 && input[j] < input[j - 1]; j--) {
      temp = input[j];
      input[j] = input[j-1];
      input[j-1] = temp;
    }
  }
  return input;
}

// Insertion sort without exchanges
let insertionSortWithoutExchanges = (input) => {
  for (let i = 0; i < input.length; i++) {
    let compare = input[i];
    let j;
    for (j = i; j > 0 && compare < input[j - 1]; j--) {
      input[j] = input[j-1];
    }
    input[j] = compare;
  }
  return input;
}

// merge sort
let mergeSort = (arr) => {
  // return the array if there's only 1 element left
  if (arr.length === 1) {
    return arr;
  }

  // otherwise, let's recursively keep breaking down elements until they're only 1 element arrays
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// merge only works if left and right are both sorted arrays already
let merge = (left, right) => {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}