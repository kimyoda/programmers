//  정수배열 arr, 2차원 배열 queries
// queries의 원소 query이고 [s, e, k]이다.
// query마다 s < i < e 이다.
// 모든 i에 대해 i가 k의 배수이면 arr[i] + 1을 더한 값을 리턴하라.
function solution(arr, queries) {
    // 전개구문으로 arr을 복사하여 초기값으로 설정한다.
    let copiedArr = [...arr];
    // 첫번째 for문에서 queries 배열을 순회하여 쿼리를 처리한다.
    for (let i = 0; i < queries.length; i++) {
    // 문제에서 [s, e, k]를 나타내므로 queries의 요소로 뺀다.
    const s = queries[i][0];
    const e = queries[i][1];
    const k = queries[i][2];
    // 두번째 for문에서 s, e내에서 j를 확인한다.
      for (let j = s; j <= e; j++) {
        // j가 k의 배수면 arr[j]값을 1증가한다.
        if (j % k === 0) {
        copiedArr[j] += 1;
        }
      }
    }
    return copiedArr;
}