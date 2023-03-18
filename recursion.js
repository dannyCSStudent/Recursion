
// using iteration
const fibIteration = (n) => {
    if (n === 0) return [];
  
    const array = [0, 1];
    for (let i = 2; i < n; i++) {
      array[i] = array[i - 2] + array[i - 1];
    }
    return array.slice(0, n);
  };
  

// console.log(fibIteration(0)); // []
// console.log(fibIteration(1)); // [0]
// console.log(fibIteration(2)); // [0, 1] 
// console.log(fibIteration(3)); // [0, 1, 1]
// console.log(fibIteration(4)); // [0, 1, 1, 2]
// console.log(fibIteration(5)); // [0, 1, 1, 2, 3]
// console.log(fibIteration(6)); // [0, 1, 1, 2, 3, 5]
// console.log(fibIteration(7)); // [0, 1, 1, 2, 3, 5, 8]
// console.log(fibIteration(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

//___________________________________________________________________

// using recursion

const fibRecursion = (n, array = [0, 1]) => {
    if (n < 2) {
        return array.slice(0, n);
    }
    if (n === 2) {
        return array;
    }
    return fibRecursion(n - 1, array.concat(array[array.length - 2] + array[array.length - 1]));

}


// console.log(fibRecursion(0)); // []
// console.log(fibRecursion(1)); // [0]
// console.log(fibRecursion(2)); // [0, 1] 
// console.log(fibRecursion(3)); // [0, 1, 1]
// console.log(fibRecursion(4)); // [0, 1, 1, 2]
// console.log(fibRecursion(5)); // [0, 1, 1, 2, 3]
// console.log(fibRecursion(6)); // [0, 1, 1, 2, 3, 5]
// console.log(fibRecursion(7)); // [0, 1, 1, 2, 3, 5, 8]
// console.log(fibRecursion(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
// ____________________________________________________________________

// merge sort

const mergeSort = (array) => {
    if (array.length < 2) {
        return array;
    }
    const mid = Math.floor(array.length / 2);
    const leftSide  = array.slice(0, mid);
    const rightSide = array.slice(mid);
    return merge(mergeSort(leftSide), mergeSort(rightSide))  
}

const merge = (array1, array2) => {
    let sortArray = [];
    while (array1.length  && array2.length) {
        if (array1[0] < array2[0]) {
            sortArray.push(array1[0]);
            array1.shift();
        } else {
            sortArray.push(array2[0]);
            array2.shift();
        }
    }
    return sortArray.concat(array1, array2);

}

const unsortedArray = [4, 2, 8, 1, 9, 3, 7]
console.log(mergeSort(unsortedArray));  // [1, 2, 3, 4, 7, 8, 9]