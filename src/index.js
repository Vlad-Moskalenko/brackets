module.exports = function check(str, bracketsConfig) {
  let bracketsObj = {}
  let arr = []

  bracketsConfig.forEach(item=>{
    let key = item[0];
    let value = item[1];
    bracketsObj[key] = value;
  })
 
  if(str.length % 2 !==0){return false}

  str.split('').forEach(item=> {
    if(arr.length !==0 && bracketsObj[arr[arr.length-1]] === item) {arr.pop()}
    else if(bracketsObj[item]) {arr.push(item)}
    else {
      return false
    }
})
    
  return arr.length === 0
}
