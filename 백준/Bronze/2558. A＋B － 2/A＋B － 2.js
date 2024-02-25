const fs=require('fs')
const input = fs.readFileSync('dev/stdin').toString().split('\n')
console.log(Number(input[0].trim()) + Number(input[1].trim()))