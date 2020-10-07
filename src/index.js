module.exports = function check(str, bracketsConfig) {
  const arr = [];
  const openBrakets = [];
  const closeBrakets = [];

  bracketsConfig.forEach((item) => {
    openBrakets.push(item[0]);
    closeBrakets.push(item[1]);
    //console.log(openBrakets, closeBrakets);
  });

  for (let i = 0; i < str.length; i++) {
    //console.log(i, str[i], arr);
    //console.log(str[i], arr);
    if (closeBrakets.includes(str[i]) && arr.length !== 0) {
      const correspondBraket = openBrakets[closeBrakets.indexOf(str[i])];
      //console.log(str[i], correspondBraket);
      if (arr[arr.length - 1] === correspondBraket || arr[arr.length - 1] === str[i]) {
        arr.pop();
      } else if (str[i] !== correspondBraket) {
        return false;
      }
    } else {
      arr.push(str[i]);
    }
  }
  //console.log(arr);
  return arr.length === 0;
}

