const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    
    let n;
    for await (const line of rl) {
        n = parseInt(line);
    }
    rl.close();
    
    // Initialize the dp array with zeros and BigInt
    let arr = Array.from({length: n + 1}, () => BigInt(0));
    let MOD = BigInt(1000000007);
    arr[0] = BigInt(1);

    for (let i = 1; i <= n; i++) {
        if (i - 1 >= 0) {
            arr[i] += arr[i - 1] % MOD;
        }
        if (i - 3 >= 0) {
            arr[i] += arr[i - 3] % MOD;
        }
        arr[i] = arr[i] % MOD; // Ensure that arr[i] remains within the MOD limit
    }
    console.log(String(arr[n] % MOD));
    
    process.exit();
})();
