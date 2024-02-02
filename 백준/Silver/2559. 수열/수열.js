let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let line = 0;
let [n,k] = input[line++].split(' ').map(Number);
let arr = input[line++].split(' ').map(Number);

let answer = []
let i = 0;
while(true){
  let leng = i+k
  let max = 0;
  if(arr.length < leng) break
  for (let j = i; j < leng; j++) {
    max+=arr[j]
  }
  answer.push(max)
  i++
}
console.log(Math.max(...answer))