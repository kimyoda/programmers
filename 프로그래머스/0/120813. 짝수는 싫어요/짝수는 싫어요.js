// n이 매개변수, 이하의 홀수가 오름차순으로 담긴 배열을 리턴
function solution(n) {
  // 1. 1부터 n까지의 숫자를 배열로 생성한다.
  const copiedOddNumbers = Array.from({length: n}, (_, i) => i + 1);

  // 2. filter로 n 이하의 홀수만 배열로 필터링하여 할당한다.
  const filteredOddNumbers = copiedOddNumbers.filter(el => el % 2 !== 0);

  return filteredOddNumbers;
}