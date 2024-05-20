// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let input = [];
	for await (const line of rl) {
		input.push(line.split(' '))
	}
	rl.close();
	let count = 0;
	let [n,m] = input[0];
	let array = input[1];
	m = String(m);
	for(let i = 0; i < n; i++){
		if(!array[i].includes(m)){
			count++
		}
	}
	console.log(count);
	process.exit();
})();
