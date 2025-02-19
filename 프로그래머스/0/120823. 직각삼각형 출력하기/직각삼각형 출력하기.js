const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;

rl.on('line', function (line) {
    input = Number(line);
}).on('close', function () {
    // 높이가 input인 직각 이등변 삼각형 출력
    for (let i = 1; i <= input; i++) {
      let stars = '*'.repeat(i);
      console.log(stars);
    }
});