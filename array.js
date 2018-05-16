'use strict';

const Mem = require('./memory');
const memory = new Mem();

class Array {
  constructor() {
    //array starts out ith zero
    this.length = 0;
    this._capacity = 0;
    //pointer to zero blocks of memory
    this.ptr = memory.allocate(this.length);
  }

  // naive
  //   push(value) {
  //     //_resize -> resize array so there is space for new item
  //     this._resize(this.length + 1);
  //     //set memory at this.ptr + length to equal the new value
  //     memory.set(this.ptr + this.length, value);
  //     //add one to length
  //     this.length++;
  //   }

  // sensible
  //with length and capacity
  //capacity -> how many items you can hod without resizing
  push(value) {
    //if length is greater than capacity then resize according to the SIZE_RATIO
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr+ this.length, value);
    this.length++;
  }

  //resizing array
  _resize(size) {
    const oldPtr = this.ptr;
    //allocate new, larger chunk of memory
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    //copying existing values from old to new
    memory.copy(this.ptr, oldPtr, this.length);
    // and freeing old
    memory.free(oldPtr);
    this._capacity = size;
  }

  //adds an index offset
  //gets value stored at a memory address
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }
  
  //rather than resize the array
  //leave an extra space which will be filled at next push
  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  //shift all of the values after the new value back one position. 
  //Then you put the new value in its correct place.
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  //copying the values backwards to fill the space where you removed the value
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }
}

// Array.SIZE_RATIO = 3;

function main(){

  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15); //capacity is still 3 - no need to re-allocate
  arr.push(19); //ptr changes - new location
  arr.push(45);
  arr.push(10);

  arr.pop();
  arr.pop();
  arr.pop();

  // console.log(arr.get(0));
  arr.remove(0);
  //   console.log(arr.get(0));
  arr.remove(0);
  //   console.log(arr.get(0));
  arr.remove(0);
  
  arr.push('tauhida');
  console.log(arr.get(0));


  //   arr.push(10);
  //   arr.push(10);
  //   arr.push(10);
  //   arr.push(10);
  //   arr.push(10);
  //   arr.push(10);
  //   arr.push(10); // capacity changes ! & ptr changes!

  console.log(arr);
  
}

main();

// 1
// What is the length, capacity and memory address of your array?
// Array { length: 1, _capacity: 3, ptr: 0 }


// 2
// after adding:
// arr.push(5);
// arr.push(15);
// arr.push(19);
// arr.push(45);
// arr.push(10);

// What is the length, capacity and memory address of your array? 
// Explain the result of your program after adding the new lines of code
// Array { length: 6, _capacity: 12, ptr: 3 }
// length - size - 6 pushes
// capacity -> changes to re-allocate
// ptr -> changes to new location

// 3
// after adding:
// arr.pop();
// arr.pop();
// arr.pop();

// What is the length, capacity and address of your array? 
// Explain the result of your program after adding the new lines of code
// Array { length: 3, _capacity: 12, ptr: 3 }
// length - 3 - pop decreases length
// capacity - stays same - doesn't resize - the extra space becomes room for us to grow into
// ptr - doesn't change location

// 4
// Print the first item in the array arr.
// console.log(arr.get(0)); --> prints 3

// 5
// Empty the array and add just one item arr.push("tauhida");

// empty array:
// arr.remove(0);
// arr.remove(0);
// arr.remove(0); 

// add item:
// arr.push('tauhida');

// 6
// Print this one item that you just added. What is the result? Can you explain your result?
// console.log(arr.get(0)); => prints NaN
// trying to insert string - memory class is created "float" - only accepts numbers

// 7.
// What is the purpose of the _resize() function in your Array class?
// resize array so there is space for new item. 
// _resize - helper function helping other methods - private (all other are public ie: push, pop,)
// - won't use outside class (like _capacity)

