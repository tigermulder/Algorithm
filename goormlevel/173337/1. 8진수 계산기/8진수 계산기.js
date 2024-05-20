// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let input = [];
	for await (const line of rl) {
		input.push(line.split(' ').map(Number))
	}
	rl.close();
	let result = input[1].reduce((acc,ele) => (
		acc+ele
	));
	
	console.log(result.toString(8));
	process.exit();
})();
