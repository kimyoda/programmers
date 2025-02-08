// 정수 n 매개변수
// n이 홀수면 n 이하의 홀수인 모든 양의 정수의 합 리턴
// n이 짝수면 n 이하의 짝수인 모든 양의 정수의 제곱의 합 리턴
function solution(n) {
  // 0. 변수 할당
  let oddSumNumber = 0;
  let sumEvenSquares = 0;
  // 1. i가 n과 같거나 넘지않고 순회
  for (let i = 0; i <= n; i++) {
    // 2. i가 홀수인 경우 홀수의 값 전부 더함   
    if (i % 2 !== 0) {
      oddSumNumber += i;
    } else {
      // 3. i가 짝수인 경우 제곱의 합을 리턴
      sumEvenSquares += i * i;   
    }
  }
  // n이 홀수일 경우 홀수의 값을 담은 변수를 리턴하고 짝수일 경우 짝수의 합을 담은 변수를 리턴한다.
  return n % 2 !== 0 ? oddSumNumber : sumEvenSquares;
}

