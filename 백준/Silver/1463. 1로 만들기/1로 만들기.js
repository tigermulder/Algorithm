var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let n = Number(input[0])
function dp(n){
    let dp = new Array(n+1).fill(0)
    dp[2] = 1
    dp[3] = 1
    for(let i = 4; i <= n; i++){
        dp[i] = dp[i-1] + 1
        if(i%3 == 0){
            dp[i] = Math.min(dp[i],dp[i/3]+1)
        }
        if(i%2 == 0){
            dp[i] = Math.min(dp[i],dp[i/2]+1)
        }
    }
    return dp[n]
}
console.log(dp(n))