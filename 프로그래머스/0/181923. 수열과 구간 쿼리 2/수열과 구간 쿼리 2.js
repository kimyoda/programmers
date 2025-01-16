// 배열 arr / 2차원 정수 배열 queries가있다.
// queries의 원소는 하나의 query이다.
// [s, e, k]고 query순서마다 s <= i <= e고
// 모든 i는 k보다 크고 가장작은 arr[i]를 찾는다.
// 순서에 맞게 저장한 배열을 반환하고 특정쿼리 답이 없으면 -1을 저장한다.

function solution(arr, queries) {
    let result = [];
    
    // 이중 for문을 활용하여 조건에 맞는 값 구하기
    // 첫번째 for문에서 i가 queries의 길이만큼 순회
    for (let i = 0; i < queries.length; i++) {
    // 문제에서 [s, e, k]를 나타내므로 queries의 각 요소로 뺴야함.
    const s = queries[i][0];
    const e = queries[i][1];
    const k = queries[i][2];
    // 조건을 만족하는 값을 저장할 빈배열    
    let currentMin = [];
      // 두번째 for문에서 j가 s와 같고 e보다 같거나 작은 j값 구하기
      for (let j = s; j <= e; j++) {
        // arr[j]가 k보다 크고 작은 값 구하기  
        if (arr[j] > k) {
         // push를 통해 j값을 배열로 넣기.
         currentMin.push(arr[j]);     
        } 
      }
      // 쿼리의 답이 존재하지 않는 경우 -1 리턴
      if (currentMin.length === 0) {
        // 조건을 만족하지 않으면 -1을 저장한다.
        result.push(-1);
      } else {
        // 배열의 최솟값 반환
        result.push(Math.min(...currentMin));
      }
    }
    return result;
}