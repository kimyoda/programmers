// 소수 판별 외부함수
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true;
}

// 소수를 배열로 담는다.
function solution(n) {
  // 변수선언
  let primeFactors = [];
  // 2부터 n까지의 모든 숫자검사  
  for (let i = 2; i <= n; i++) {
    // i가 n의 약수이면서 소수면 소수배열에 추가한다.
    if(n % i === 0 && isPrime(i)) {
      primeFactors.push(i);    
    }  
  }
  return primeFactors;
}