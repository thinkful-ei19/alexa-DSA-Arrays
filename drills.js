'use strict';

// find runtime complexity

// 1. URLify a string

// Input: tauhida parveen
// Output: tauhida%20parveen

// input: www.thinkful.com /tauh ida parv een
// output: www.thinkful.com%20/tauh%20ida%20parv%20een

function url(str) {
//   const re = new RegExp(/' '/g);
  const newStr = str.replace(/ /g, '%20');
  return newStr;

}

console.log(url('alexa scott'));
console.log(url('www.thinkful.com /tauh ida parv een'));


// 2. Filtering an array

// input: [1, 2, 3, 4, 5, 6, 7]
// output: [5, 6, 7]

// input: [3, 10, 4, 18, 2, 22]
// output: [10, 18, 22]

// *** remove items from that arr instead of creating new arr2

function filterArray(arr) {
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 5) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

console.log(filterArray([1, 2, 3, 4, 5, 6, 7]));
console.log(filterArray([3, 10, 4, 18, 2, 22]));


// 3. Max sum in the array
// ** see  Kadane's Algorithm

// Input: [4,6,-3,5,-2,1]
// Output: 12

// Input: [2, 3, -6, -1, 2, -1, 6, 4, -8, 8]
// Output: 11

//Linear O(n) - directly proportional to input size

function maxSumArray(arr) {
  let sum = 0;
  let maxSum = 0;

  for (let i = 0; i<arr.length; i++) {
    sum += arr[i];

    if (sum > maxSum) {
      maxSum = sum;
    } else if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;

}

console.log(maxSumArray([4,6,-3,5,-2,1]));
console.log(maxSumArray([2, 3, -6, -1, 2, -1, 6, 4, -8, 8]));


// 4. Merge Arrays

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

function sortArrays(arr, arr2) {
  let arr3 = [];
  arr3.length = arr.length + arr2.length;
  arr3 = arr;
  let printArray = arr3.concat(arr2);
  printArray.sort((a, b) => a - b);
  // console.log('this is arr3 length', arr3.length);
  //   console.log('this is arr3', arr3);
  return printArray;
}

let arr = [1, 3, 6, 8, 11];
let arr2 = [2, 3, 5, 8, 9, 10];
console.log(sortArrays(arr, arr2));


// 5. Remove Characters

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

// Linear O(n)
function removeChar(str, charToBeRemoved) {
  let newStr = '';
  let temp = [];

  let vowels = [];

  for(let z = 0; z < charToBeRemoved.length; z++) {
    vowels.push(charToBeRemoved[z]);
  } 

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) === -1) {
      temp.push(str[i]);
    }
  }

  for (let j = 0; j < temp.length; j++) {
    newStr += temp[j];
  }

  return newStr;
}

console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));


// 6. Products

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

function getProductsOfAllExceptAtIndex(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let total = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] != arr[j]) {
        total *= arr[j];
      }
    }
    newArr.push(total);
  }
  return newArr;
}

const example = [1, 3, 9, 4];
console.log(getProductsOfAllExceptAtIndex(example));


// 7. 2D Array



// 8. String rotation

// Input: amazon, azonma
// Output: False

// Input: amazon, azonam
// Output: true

function areRotations(str1, str2) {
  const concatStr1 = str1 + str1;
  return concatStr1.includes(str2);
}

// function areRotations2(str1, str2) {
//   const s3 = str1 + str1;
//   // first check to see if strings are same length
//   if (str1.length !== str2.length) {
//     return false;
//   } 
//   else if (s3.includes(str2)) {
//     return true;
//   }
// }

console.log(areRotations('amazon','azonam'));
console.log(areRotations('amazon','azonma'));




