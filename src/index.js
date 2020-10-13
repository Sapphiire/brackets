module.exports = function check(str, bracketsConfig) {
  const regexp = new RegExp('[' + bracketsConfig.reduce((accumulator, current) => accumulator + current.reduce((acc1,cur1, index) => {
    const value = "[]\\/^$.|?*+(){}".split('').every(el => cur1.indexOf(el) === -1) ? cur1 : "\\" + cur1;
    return index == 1 ? acc1 + ".*" + value : acc1 + value
      
  }, ""), "") + ']')
  return regexp.test(str)
}
