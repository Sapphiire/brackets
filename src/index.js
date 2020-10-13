module.exports = function check(str, bracketsConfig) {
  const length = str.length;
  let brackets_open = new Map();
  let brackets_exit = new Map();
  let array = [];

  bracketsConfig.forEach(element => brackets_open.set(element[0],element[1]))
  bracketsConfig.forEach(element => brackets_exit.set(element[1],element[0]))

  for(let i = 0; i < length; i++) {
    if(brackets_exit.has(str[i])) {
      if((!array.length || array[array.length - 1] != brackets_exit.get(str[i])) && !brackets_open.has(str[i]))
        return false;
      else
        array.pop();
    }
    else
      array.push(str[i]);
  }

  return array.length ? false : true
}