// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let n
	for await (const line of rl) {
		n = line;
		rl.close();
	}
	let result = BigInt(1);
	const MOD = BigInt(1000000007);
	for (let i = 1; i < n; i++) {
		result = result * BigInt((i+1))
	}
	console.log(String(result%MOD))
	process.exit();
})();
