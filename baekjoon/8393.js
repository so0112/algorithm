const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
const input = fs.readFileSync(filePath).toString().trim();

let num = +input;
const answer = '';

for (let i = num; i >= 1; i--){
    console.log(i);
}


let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer = '';

for (let i = input; i >= 1; i--) {
    answer += i + '\n';
}

console.log(answer);
