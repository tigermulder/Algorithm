const [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const queue = [[N, 0]];
const visited = Array(100001).fill(false);

while (queue.length) {
  const [cur, depth] = queue.shift();

  if (visited[cur]) {
    continue;
  }

  visited[cur] = true;

  if (cur === K) {
    console.log(depth);
    break;
  }

  for (let next of [cur + 1, cur - 1, cur * 2]) {
    if (!visited[next] && next >= 0 && next <= 100000) {
      queue.push([next, depth + 1]);
    }
  }
}