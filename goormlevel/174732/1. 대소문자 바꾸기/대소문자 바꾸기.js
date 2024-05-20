// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let result = '';
	let n;
	for await (const line of rl) {
		n = await line
		rl.close();
	}
	for(let i = 0; i < n.length; i++){
		
		if(n[i] === n[i].toLowerCase()){
			result+=n[i].toUpperCase()
		}else{
			result+=n[i].toLowerCase()
		}
		
	}
	
	console.log(result);
	process.exit();
})();
