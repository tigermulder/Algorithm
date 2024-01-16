const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(nm => parseInt(nm));

const N = input.shift();
const M = input.shift();
const visited = new Array(N);
const output = [];

function dfs(idx, cnt) {
  if (cnt === M) {
    console.log(output.join(' '));
    return;
  }

  for (let i = idx; i < N; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    output.push(i + 1);
    dfs(i, cnt + 1);
    output.pop();
    visited[i] = false;
  }
}

dfs(0, 0);
