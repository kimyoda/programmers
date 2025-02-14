// x가짝수일때 2로 나누고, 홀수일때 3 * x +1
// 반드시 x가 1이 되는지 확인
// 초기값이 n인
function solution(n) {
  // 0. 변수 선언
  const sequence = [n];
  // 1. n이 1이 안될 때
  while (n !== 1) {
    // 2. n이 짝수 일때 2로 나눈다.
    if (n % 2 === 0) {
      n = n / 2;
    // 3. n이 홀수 일때 경우의 수 적용
    } else {
      n = 3 * n + 1;
    }
    // push를 통해 배열에 추가한다.
    sequence.push(n);
  }
  return sequence;
} 