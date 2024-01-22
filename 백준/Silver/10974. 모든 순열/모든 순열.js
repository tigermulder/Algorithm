
const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n')
let line = 0;
let a = Number(input[line++])
let arr = []
for (let i = 1; i <= a; i++) {
  arr.push(i)
}
function combination(arr,num){
  let result = []
  if(num === 1) return arr.map(ele=>[ele])
  arr.forEach((fixed,idx,origin) => {
    let rest = [...origin.slice(0,idx),...origin.slice(idx+1)]
    let combinations = combination(rest,num-1)
    let attached = combinations.map(ele=>[fixed,...ele])
    result.push(...attached)
  });
  return result
}
let result = combination(arr,a)
console.log(result.map(ele=>ele.join(' ')).join('\n'))