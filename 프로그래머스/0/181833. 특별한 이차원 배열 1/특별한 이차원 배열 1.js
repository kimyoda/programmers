// 이중 배열문제
// n x n 이차원배열에서 i = j면 1(true), 아니면 0(false) 값 반환
function solution(n) {
    // 빈배열 선언, 매개변수 선언
    const arr = [];
    let number = n;
    // 이중 for문으로 이차원 배열 적용
    // 첫번째 for문: 행을 순회하면서 배열을 추가한다.
    for (let i = 0; i < number; i++) {
      // 각 행을 빈 배열로 초기화
      arr[i] = [];
      // 두번째 for문: 열을 순회하면서 값을 채운다.
      for (let j = 0; j < number; j++) {
        // 행과 열의 인덱스가 같으면 1을 넣고, 아니면 0을 넣는 조건식을 넣는다.
        if (i === j) {
          arr[i][j] = 1;
        } else {
          arr[i][j] = 0;
        }
      }
    }
    return arr;
}