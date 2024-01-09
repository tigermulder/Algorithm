const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let line = 0
let [n,m,k] = input[line++].split(' ').map(Number)
let matrix = []
for (let i = 0; i <= n; i++) {
  let sum = []
  for (let j = 0; j <= m; j++) {
    sum.push(0)
  }
  matrix.push(sum)
}
for (let i = line; i < line+k; i++) {
  let [row,col] = input[i].split(' ').map(Number)
  matrix[row][col] = 1
}
let trash = 0
let visitTable = Array.from({length:n+1},()=>new Array(m+1).fill(false))
function dfs(matrix,visitTable,startRow,startCol){
  let rows = matrix.length
  let cols = matrix[0].length
  let count = 0
  if (startRow < 1 || startRow >= rows || startCol < 1 || startCol >= cols || matrix[startRow][startCol] === 0 || visitTable[startRow][startCol]) {
    return 0
  }
  visitTable[startRow][startCol] = true;
  count++
  count += dfs(matrix,visitTable,startRow-1,startCol)
  count += dfs(matrix,visitTable,startRow+1,startCol)
  count += dfs(matrix,visitTable,startRow,startCol-1)
  count += dfs(matrix,visitTable,startRow,startCol+1)
  return count
}
for (let i = 1; i < matrix.length; i++) {
  for (let j = 1; j < matrix[i].length; j++) {
    if(matrix[i][j] === 1 && !visitTable[i][j]){
      trash = Math.max(trash,dfs(matrix,visitTable,i,j)) 
    }
  }
}
console.log(trash)