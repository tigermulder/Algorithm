function solution(dice){
  let leng = dice.length;
  let groupSize = leng/2;
  let dices = new Array(leng).fill(0).map((_,index)=>index+1)

  const getCombinations = (array, selectNumber) => {
    const results = [];
    if(selectNumber === 1){
        return array.map((element) => [element]);
    }
    array.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });
    return results;
  }
  let groupA = getCombinations(dices,groupSize)
  let groupB = groupA.map((ele)=>{
    return dices.filter(eleB => !ele.includes(eleB))
  })

  // 선택한 주사위로 가질 수 있는 모든 합을 구하는 함수
  function getSums(combo){
    const sums = [];
    function calSums (count, sum){
      if (count === groupSize) {
        sums.push(sum);
        return;
      }
      for (let i=0; i<6; i++) {
        calSums(count + 1, sum + dice[combo[count] - 1][i]);
      }
    }
    calSums(0,0)
    return sums.sort((a,b) => a-b);
  }
  let answer;
  let win = 0;
  let groupLeng = groupA.length;

  for (let i = 0; i < groupLeng; i++) {
    let nowWin = 0;
    let SumA = getSums(groupA[i])
    let SumB = getSums(groupB[i]);
    let lengA = SumA.length;
    let lengB = SumB.length;
    let pointer = 0;
    
    for (let j = 0; j < lengA; j++) {
      for (let k = pointer; k < lengB; k++) {
        if(SumA[j] <= SumB[k]) {
          pointer = k
          break;
        }
        nowWin++;        
      }
      nowWin+=pointer
    }
    if(nowWin > win) {
      win = nowWin;
      answer = groupA[i]
    }
  }
  return answer
  
}