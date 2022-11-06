// Implement function check(str, bracketsConfig), that for given
// brackets sequence will return true if it is correct and false otherwise

// In the second param there is bracketsConfig - the array of pairs
// open - closed brackets.Each subarray includes only 2 elements - opening and closing bracket

// check('()', [['(', ')']]) // -> true
// check('((()))()', [['(', ')']]) // -> true
// check('())(', [['(', ')']]) // -> false
// check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
// check('[(])', [['(', ')'], ['[', ']']]) // -> false
// check('[]()', [['(', ')'], ['[', ']']]) // -> true
// check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// special case: opening and closing bracket can be the same :)

// check('||', [['|', '|']]) // -> true
// check('|()|', [['(', ')'], ['|', '|']]) // -> true
// check('|(|)', [['(', ')'], ['|', '|']]) // -> false
// check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true

module.exports = function check(str, bracketsConfig) {
  const stack = [];
  let currentSymbol;
  let topSymbol;

  if (str.length % 2 !== 0) return false;

  for (let i = 0; i < str.length; i += 1) {
    currentSymbol = str[i];

    for (let j = 0; j < bracketsConfig.length; j += 1) {
      topSymbol = stack[stack.length - 1];

      if (currentSymbol === bracketsConfig[j][1] && topSymbol === bracketsConfig[j][0]) {
        stack.pop();
      } else if (currentSymbol === bracketsConfig[j][0]) {
        stack.push(currentSymbol);
      }
    }
  }

  return stack.length === 0;
};
