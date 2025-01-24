// 배열 numbers 매개변수
// numbers의 원소의 평균값을 리턴
function solution(numbers) {
  // reduce를 활용하여 배열 numbers의 합을 구한다.
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  // 전체 합 / 배열 numbers 길이를 나누면 평균값
  return sum / numbers.length;
}