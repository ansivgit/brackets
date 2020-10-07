module.exports = function check(str, bracketsConfig) {
  const arr = [];
  const openBrackets = [];
  const closeBrackets = [];

  bracketsConfig.forEach((item) => {
    openBrackets.push(item[0]);
    closeBrackets.push(item[1]);
  });

  for (let i = 0; i < str.length; i++) {
    if (closeBrackets.includes(str[i]) && arr.length !== 0) {
      const correspondBracket = openBrackets[closeBrackets.indexOf(str[i])];
      if (arr[arr.length - 1] === correspondBracket || arr[arr.length - 1] === str[i]) {
        arr.pop();
      } else if (str[i] !== correspondBracket) {
        return false;
      } else {
        arr.push(str[i]);
      }
    } else {
      arr.push(str[i]);
    }
  }
  return arr.length === 0;
};
