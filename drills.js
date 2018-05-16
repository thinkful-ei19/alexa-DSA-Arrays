'use strict';

// URLify a string

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
