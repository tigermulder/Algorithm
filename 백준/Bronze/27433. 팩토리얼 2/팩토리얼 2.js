const fs = require('fs');
const [input] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(nm => parseInt(nm));

function recursion(n){
  if(n === 1 || n === 0){
    return 1
  }
  return n * recursion(n-1)
}
console.log(recursion(input))