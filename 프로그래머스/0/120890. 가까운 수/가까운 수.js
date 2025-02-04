// 배열 array, 정수 n
// array 중 가장 가까운 수 n 리턴
function solution(array, n) {
  const copiedArr = [...array];
  // 1. 순차적으로 정렬시켜 n과 비교한다
  // 2. 각 요소를 거리로 생각하여 더 작은 거리를 구한다
  const closeNum = copiedArr.sort((a, b) => a - b);
  // 가장가까운 거리로직
  const diffArr = closeNum.map(el => Math.abs(n - el));
  // 최소거리
  const minDiff = Math.min(...diffArr);

  // 최종 가까운 수 [0]의 첫번째 요소를 리턴한다.
  const finalNum = closeNum.filter(el => Math.abs(n - el) === minDiff)[0];
  
  return finalNum;
}