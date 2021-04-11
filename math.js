// @args      2 Variable Numeric
// @fungsi    Swapping value of 2 variable, without adding new var
// @output    String
const swapVariable = (a, b) => {
  // let a = 30;
  // let b = 23;

  let before = `A = ${a}, B = ${b}`;

  a = a + b;
  b = a - b;
  a = a - b;

  return `Sebelumnya : ${before}\nSesudah : A = ${a}, B = ${b}`;
};

// @args      Array of Number
// @fungsi    Find the largest value from array
// @output    Numeric
const findTheLargest = (arr) => {
  //let arr = [2, 14, -32, 2, 9, 6, 7, 31, 29];
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

  return max;
};

// @args      Numeric
// @fungsi    sum to 0 the different number
// @args      Array of number
// @status    bugs for num < 3
const theDifferent = (num) => {
  //let num = 2;
  let sum = 0;
  let output = [];

  for (let i = 0; i < num; i++) {
    if (i !== num) {
      if (i + 1 === num) {
        output.push(sum * -1);
      } else {
        output.push(i);
      }
      sum += i;
    }
  }

  return output;
};

// @args      Numeric
// @fungsi    Box of number
// @args      String
// @status    not completed
const boxOfNumber = (num) => {
  //let num = 3;
  let max = 0;
  let output = "";

  for (let i = 1; i <= num; i++) {
    for (let c = 1; c <= num; c++) {
      if (max < 10) {
        output += `0${max} `;
      } else {
        output += max;
      }
      max++;
    }

    output += "\n";
  }

  return output;
};

console.log(theDifferent(2));
