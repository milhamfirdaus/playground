function scoreChecker(score) {
  let res = "Anda mendapatkan nilai";

  if (score >= 90) {
    res = `Selamat! ${res} A.`;
  } else if (score >= 80) {
    res += " B.";
  } else if (score >= 70) {
    res += " C.";
  } else if (score >= 60) {
    res += " D.";
  } else {
    res += " E.";
  }

  return res;
}
