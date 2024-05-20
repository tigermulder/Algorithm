// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let str;
	for await (const line of rl) {
		str = String(line);
		console.log(str.length);
		rl.close();
	}
	
	process.exit();
})();
