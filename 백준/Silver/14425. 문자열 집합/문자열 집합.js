var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let line = 0;
const [n,m] = input[line++].split(' ').map(Number);
let answer = 0
let hash = {}
for (let i = line; i < line+n; i++) {
  hash[input[i].trim()] = 0
}
line+=n
for (let i = line; i < line+m; i++) {
  let str = input[i].trim();
  if(hash.hasOwnProperty(str)){
    hash[str] = hash[str]+1
  }
}
for (const key in hash) {
  answer+=hash[key]
}
console.log(answer)