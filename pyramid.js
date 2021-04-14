const rightWithFormat = (len) => {
  let format = "&%@";
  let res = "";

  for (let r = 0; r <= len; r++) {
    for (let c = 0; c < r; c++) {
      if (c >= format.length) {
        res += format[c % format.length] + " ";
      } else {
        res += format[c] + " ";
      }
    }
    res += "\n";
  }

  return res;
};

const pyramid = (len) => {
  let res = "";

  for (let r = 0; r <= len; r++) {
    for (let c = 0; c < r; c++) {
      if (c + r >= len) {
        res += "* ";
      } else {
        res += "  ";
      }
    }
    res += "\n";
  }
  return res;
};

const left = (len) => {
  let res = "";

  for (let r = 0; r <= len; r++) {
    for (let c = 0; c < len; c++) {
      if (r + c >= len) {
        res += "* ";
      } else {
        res += "  ";
      }
    }
    res += "\n";
  }
  return res;
};

console.log(left(9));
