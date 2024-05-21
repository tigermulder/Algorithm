const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    
    let input = [];
    for await (const line of rl) {
        input.push(line.split(' ').map(Number));
    }
    rl.close();
    
    let n = input[0][0];
    let arr = input[1];
    let maxSum = 0;
    let currentSum = arr[0];
    
    for (let i = 1; i < n; i++) {
        if (arr[i] - arr[i - 1] === 1) {
            currentSum += arr[i];
        } else {
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
            currentSum = arr[i];
        }
    }
    
    // 마지막으로 계산된 currentSum도 고려
    if (currentSum > maxSum) {
        maxSum = currentSum;
    }
    
    console.log(maxSum);
    process.exit();
})();
