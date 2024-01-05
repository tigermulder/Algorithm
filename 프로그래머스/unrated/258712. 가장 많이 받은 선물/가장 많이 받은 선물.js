function solution(friends, gifts) {
  let answer = {}
  let fromTo = {}
  let people = {}
  let check = {}
  for (const i of friends) {
    answer[i] = 0
    people[i] = [0,0,0]
  }
  friends.forEach(name => {
    fromTo[name] = {}
    check[name] = {}
    friends.forEach(inner => {
      if(name !== inner){
        fromTo[name][inner] = 0
        check[name][inner] = false
      }
    })
  });
  for (const cur of gifts) {
    let [from,to] = cur.split(' ')
    people[from][0] = people[from][0]+1
    people[from][2] = people[from][2]+1
    people[to][1] = people[to][1]+1
    people[to][2] = people[to][2]-1
    fromTo[from][to] = fromTo[from][to]+1
  }
  for (const cur in people) {
    for (const i in fromTo[cur]) {
      let gift = fromTo[cur][i] // 내가 특정인물에게 준 선물준갯수
      let received = fromTo[i][cur] // 내가 선물을한 준특정인물이 나에게준 선물갯수
      if(gift > 0 || received > 0){
        if(gift === received){
          if(check[i][cur] === false && check[cur][i] === false){
            check[i][cur] = true
            check[cur][i] = true
            if(people[i][2] < people[cur][2]){
              answer[cur] = answer[cur]+1
            }else if(people[cur][2] < people[i][2]){
              answer[i] = answer[i]+1
            }
          }
        }else{
          if(gift > received){
            answer[cur] = answer[cur]+1
          }
        }
      }else if(gift === 0 && received === 0){
        if(check[i][cur] === false && check[cur][i] === false){
          check[i][cur] = true
          check[cur][i] = true
          if(people[i][2] < people[cur][2]){
            answer[cur] = answer[cur]+1
          }else if(people[cur][2] < people[i][2]){
            answer[i] = answer[i]+1
          }
        }
      }
    }
  }
  answer = Object.values(answer)
  return Math.max(...answer)
}