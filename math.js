// @args    2 Variable Numeric
// @func    Swapping value of 2 variable, without adding new var
// @output  String
const swapVariable = (a, b) => {
  // let a = 30;
  // let b = 23;

  let before = `A = ${a}, B = ${b}`;

  a = a + b;
  b = a - b;
  a = a - b;

  return `Sebelumnya : ${before}\nSesudah : A = ${a}, B = ${b}`;
};

// @args    Array of Number
// @func    Find the largest value from array
// @output  Numeric
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

// @args    Numeric
// @func    Sum to 0 the different number
// @args    Array of number
// @bugs    bugs for num < 3
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

// @args    Numeric
// @func    Box of number
// @args    String
const boxOfNumber = (len) => {
  let num = 1;
  let output = "";

  for (let r = 0; r < len; r++) {
    let temp = [];
    for (let c = 0; c < len; c++) {
      if (r % 2 === 0) {
        output += num < 10 ? `0${num} ` : num + " ";
      } else {
        temp.push(num < 10 ? `0${num} ` : num + " ");
      }
      num++;
    }
    if (r % 2 !== 0) {
      output += temp.reverse().join("");
    }
    output += "\n";
  }

  return output;
};


// Testing func here
console.log(boxOfNumber(6));
