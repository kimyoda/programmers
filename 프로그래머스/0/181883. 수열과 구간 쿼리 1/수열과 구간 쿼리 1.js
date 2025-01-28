// 정수배열 arr, 2차원 배열 queries
// queries 원소 는 query [s, e]다
// query마다 s < i < e인 i에 대해 arr[i] + 1
// 리턴해라
function solution(arr, queries) {
  // 0. query의 [s, e] 구조분해할당으로 forEach문으로 순회하기
  queries.forEach(query => {
  // 구조분해할당
    const startIndex = query[0];
    const endIndex = query[1];
    // 3. startIndex < i < endIndex의 i에 관해 arr[i] + 1
    for (let i = startIndex; i <= endIndex; i++) {
      arr[i] += 1;
    }
  });
  return arr;

}