const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let line = 0;
let [n,m] = input[line++].split(' ').map(Number)
const seq = [...Array(m)].fill(0);
const visited = [...Array(n)].fill(false);
let result = ''
function dfs(start){
  if(start === m){
    const arr = []
    for (let i = 0; i < m; i++) {
      arr.push(seq[i])
    }
    return result += `${arr.join(' ')}\n`
  }
  for (let i = 1; i <= n; i++) {
    if(!visited[i]){
      seq[start] = i;
      visited[i] = true;
      dfs(start+1)
      visited[i] = false
    }
  }
}
dfs(0)
console.log(result)
