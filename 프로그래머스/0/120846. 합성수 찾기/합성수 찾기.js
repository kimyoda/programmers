// 합성수
// 10 -> 4, 6, 8, 9, 10 -> [1, 2, 4], [1, 2, 3, 6], [1, 2, 4, 8], [1, 3, 9], [1, 2, 5, 10] 소수를 먼저 생각

// 소수의 개수를 구하고, 구할려고 하는 합성수의 길이만큼뺀 값을 리턴.
// 1. 소수 구하기
function isPrime(num) {
  let isCheckNumber = true;
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isCheckNumber = false;
      break;
    }
  }
  return isCheckNumber;
}

function solution(n) {
  // 1. 
  let result = 0;
  
  for (let i = 1; i <= n; i++) {
    if (!isPrime(i)) {
      result++;
    }
  }
  // 2.
  return result;
}