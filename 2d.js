'use strict';

const exampleArray = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];
  
function traversal(arr) {
  let zeroCol = [];
  let zeroRow = [];
  
  // scans matrix to find positions of 0s in rows and cols
  for (let i = 0; i < arr.length; i++) {
    let row = arr[i];
    for (let j = 0; j<row.length; j++) {
      const item = row[j];
      if (item === 0) {
        //true - atleast 1 zero
        zeroRow[i] = true;
        zeroCol[j] = true;
      }
    }
  }
    
  //update value
  for (let i = 0; i < arr.length; i++) {
    let row = arr[i];
    for (let j = 0; j<row.length; j++) {
      if (zeroRow[i] || zeroCol[j]) {
        row[j] = 0;
      }
    }
  }
  return arr;
}
  
console.log(traversal(exampleArray));