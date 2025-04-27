// 배열 array, 정수 n
// array 중 가장 가까운 수 n 리턴
function solution(array, n) {
  const copiedArr = [...array];
  // 1. 순차적으로 정렬시켜 n과 비교한다
  // 2. 각 요소를 거리로 생각하여 더 작은 거리를 구한다
  const closeNum = copiedArr.sort((a, b) => a - b);
  // 가장가까운 거리로직
  const diffArr = closeNum.map((el) => Math.abs(n - el));
  // 최소거리
  const minDiff = Math.min(...diffArr);

  // 최종 가까운 수 [0]의 첫번째 요소를 리턴한다.
  const finalNum = closeNum.filter((el) => Math.abs(n - el) === minDiff)[0];

  return finalNum;
}

function solution2(array, n) {
  // reduce로 acc와 cur 각각 n과의 거리를 계산하여 비교한다.
  const closeNumArr = array.reduce((acc, cur) => {
    const accDiff = Math.abs(n - acc);
    const curDiff = Math.abs(n - cur);

    // 현재 값(cur)이 더 가까우면 cur을 선택
    // 거리가 같으면 더 작은 수를 선택
    if (curDiff < accDiff || (curDiff === accDiff && cur < acc)) {
      return cur;
    }
    return acc;
  });

  return closeNumArr;
}
