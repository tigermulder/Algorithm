// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let arr;
	for await (const line of rl) {
		arr = await line.split(' ').map(Number);
		rl.close();
	}
	console.log((arr[0] + arr[1]).toFixed(6));
	process.exit();
})();
