function solution(num, k) {
    num = String(num)
    k = String(k)
    for(let i = 0; i < num.length; i++){
        if(num[i] === k){
            return i+1
        }
    }
    return -1
}