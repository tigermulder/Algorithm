function solution(fees, records) {
  let car = {}
  for (const str of records) {
    let [time,Num,inOut] = str.split(' ')
    car[Num] = [0,0,false,0]
  }
  for (const str of records) {
    let [time,Num,inOut] = str.split(' ')
    if(car[Num][2] === false && inOut === 'IN'){
      car[Num][2] = true
      car[Num][0] = time.split(':').map(Number).reduce((acc,ele)=>(acc*60)+ele)
    }else if(car[Num][2] === true && inOut === 'OUT'){
      car[Num][2] = false
      car[Num][1] = car[Num][1]+(time.split(':').map(Number).reduce((acc,ele)=>(acc*60)+ele)-car[Num][0])
      car[Num][0] = 0
    }
  }
  for (const i in car) {
    let [time,totalTime,inOut,price] = car[i]
    if(inOut !== true){
      if(totalTime <= fees[0]){
        car[i] = fees[1]
      }else{
        car[i] = fees[1]+Math.ceil((totalTime-fees[0])/fees[2])*fees[3]
      }
    }else{
      car[i][1] = car[i][1]+(1439 - time)
      car[i][0] = 0
      car[i][2] = false
      if(car[i][1] <= fees[0]){
        car[i] = fees[1]
      }else{
        car[i] = fees[1]+Math.ceil((car[i][1]-fees[0])/fees[2])*fees[3]
      }
    }
  }
  let sortedArray = Object.keys(car).sort((a, b) => Number(a) - Number(b)).map(key => ({ [key]: car[key] }));
  let val = sortedArray.map(obj => obj[Object.keys(obj)[0]])
  return val
}