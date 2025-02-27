// numbers 정수배열, 정수 n
// numbers 원소를 앞에서부터 하나씩 더함
// 합이 n보다 커질 때 더했던 원소들의 합을 리턴
function solution(numbers, n) {
  // 저장할 변수
  let sumsElement = 0;
  // 1. forEach를 통해 순회
  numbers.forEach(el => {
  // 2. 저장할 변수가 n보다 커질때까지 순회한다.
    if (sumsElement > n) {
      return; 
    }
    sumsElement += el;
  });
  return sumsElement;
}