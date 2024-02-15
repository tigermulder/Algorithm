let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let line = 0;
let n = Number(input[line++]);
let arr = input[line++].split(' ').map(Number);
arr.sort((a,b)=>a-b)
const min = arr[0];


let boolean = true;
for (let j = 1; j <= min; j++) {
  for (let k = 0; k < arr.length; k++) {
    if(arr[k]%j !== 0){
      boolean = false;
    }
  }
  if(boolean){
    console.log(j)
  }else{
    boolean = true;
  }
}
