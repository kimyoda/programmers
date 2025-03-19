function solution(num, n) {
  let result = 0;

  if (num % n === 0) {
    result = 1;
  }
  return result;
}

function solution2(num, n) {
  // num 나누기 n이 0이면 1 아니면 0을 리턴
  const result = num % n === 0 ? 1 : 0;

  return result;
}

function solution3(num, n) {
  // 비트 연산자
  const result = (num % n === 0) | 0;

  return result;
}
