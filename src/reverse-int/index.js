// FIXME: tests

module.exports = function reverse(n) {
  let result = 0;
  let num = Math.abs(n);

  while (num > 0) {
    result = result * 10 + (n % 10);
    num = Math.floor(n / 10);
  }

  return result;

  // let str = Math.abs(n).toString();
  // let result = '';
  // let i = 0;
  // while (i < str.length) {
  //   result = `${str[i]}${result}`;
  //   i++;
  // }
  // return +result;
};
