// @ Math
// @ Swapping value of 2 variable, without adding new var
// @ Javascript
/* 
    let a = 30;
    let b = 23;
    console.log(`A = ${a}, B = ${b}`);

    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`A = ${a}, B = ${b}`);
*/

// @ Math, Array
// @ Find the largest value from array of Number
// @ Javascript
/*
let arr = [2, 14, -32, 2, 9, 6, 7, 31, 29];
let max = 0;

for (let i = 0; i < arr.length; i++) {
  //next index;
  let n = arr[i + 1];

  if (i > n && i > max) {
    max = n;
  } else if (n > max) {
    max = n;
  }
}

console.log(max);
*/

let num = 2;
let sum = 0;
let output = [];

for (let i = 0; i < num; i++) {
  if (i !== num) {
    if (num < 3) {
    } else if (i === num - 1) {
      output.push(sum * -1);
    } else {
      output.push(i);
    }
    sum += i;
  }
}

console.log(output);
