// 자연수를 제곱했을 때 나오는 정수를 제곱수
// n이 매개변수일때 제곱수면 1 아니면 2를 리턴
function solution(n) {
  // 제곱수일 때 구하는 자바스크립트 메서드
  const sqrt = Math.sqrt(n);
  // sqrt면 1 아니면 2
  return sqrt % 1 === 0 ? 1 : 2;
}

