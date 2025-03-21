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

function solution2(n) {
  // Array로 배열로 만들고 길이를 정함
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  // n이 짝수일 때
  if (n % 2 !== 0) {
    // 홀수 일 때 홀수의 값을 전부 더한다.
    return arr.filter((el) => el % 2 !== 0).reduce((acc, cur) => acc + cur, 0);
  } else {
    // 짝수 일 때 제곱의 합을 다 더한다.
    return arr
      .filter((el) => el % 2 === 0)
      .reduce((acc, cur) => acc + cur * cur, 0);
  }
}
