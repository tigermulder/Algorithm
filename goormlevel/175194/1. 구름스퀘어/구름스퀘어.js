// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let input = [];
	for await (const line of rl) {
		input.push(line.split(' ').map(Number));
	}
	rl.close();
	let n = input.shift()[0];
	input.sort((a,b) => {
		if(a[1] === b[1]){
			return a[0] - b[0]		
		}else{
			return a[1] - b[1]		
		}
	});
	
	let count = 1;
	let 이전행사끝나는시간 = input[0][1];
	// 이전행사끝나는시간과 시작시간이 같으면 무효 
	for(let i = 1; i < n; i++){
		let [시작시간, 끝나는시간] = input[i]
		if(이전행사끝나는시간 >= 시작시간){
			continue
		}else{
			이전행사끝나는시간 = 끝나는시간;
			count++
		}
	}
	console.log(count);
	process.exit();
})();
