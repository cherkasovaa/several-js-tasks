// Task is to write a function, that decodes Morse code and returns a string

// Input: String. Its length is multiple of 10.

// Each letter from alphabet encoded with dots(.) and dashes(-).
// 10 stands for dot(.), 11 stands for dash(-).
// Each encoded letter's length is 10.
// If the length of the encoded letter is less then 10, it left padded with 0.
// Space in string is **********.
// Output: String (decoded) Example:
// me -> m === -- === 0000001111, e === . === 0000000010 -> 00000011110000000010

const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function replacer(str) {
  const regDot = /10/gi;
  const regDash = /11/gi;
  const regZero = /0/gi;

  return str.replace(regDot, '.').replace(regDash, '-').replace(regZero, '');
}

function sliceArray(expr) {
  const size = 10;
  const symbolsArr = [];

  for (let i = 0; i < Math.ceil(expr.length / size); i += 1) {
    symbolsArr[i] = expr.slice(size * i, size * i + size);
  }

  return symbolsArr;
}

function decode(expr) {
  const SPACE = '**********';

  const symbolsArr = sliceArray(expr);
  let result = '';

  for (let i = 0; i < symbolsArr.length; i += 1) {
    symbolsArr[i] = replacer(symbolsArr[i]);

    if (MORSE_TABLE.hasOwnProperty(symbolsArr[i])) {
      result += MORSE_TABLE[symbolsArr[i]];
    }
    if (symbolsArr[i] === SPACE) {
      result += ' ';
    }
  }

  return result;
}

module.exports = {
  decode,
};
