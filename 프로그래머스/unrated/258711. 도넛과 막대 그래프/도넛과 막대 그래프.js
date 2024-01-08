function solution(edges) {
  let answer = new Array(4).fill(0)
  let give = {}
  let received = {}
  let leng = 0
  for (const [from, to] of edges) {
    give[from] = (give[from] || 0) + 1;
    received[to] = (received[to] || 0) + 1;
    leng = Math.max(leng, from, to);
  }
  for (let i = 1; i <= leng; i++) {
    give[i] = 0
    received[i] = 0
  }
  for (const [from,to] of edges) {
    give[from]++
    received[to]++
  }
  for (let i = 1; i <= leng; i++) {
    if(received[i] === 0 && give[i] >= 2){
      answer[0] = i
    }else if(give[i] === 0){
      answer[2] = answer[2]+1
    }else if(give[i] >= 2 && received[i] >= 2){
      answer[3] = answer[3]+1
    }
  }
  answer[1] = give[answer[0]] - answer[2] - answer[3];
  return answer
}
