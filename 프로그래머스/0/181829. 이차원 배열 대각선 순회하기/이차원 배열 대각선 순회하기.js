// 2차원 배열 문제
// 2차원 정수배열 board, 정수 k가 있다.
// i + j <= 를 만족하는 모든 i,j에 대한 board[i][j]합 리턴.
function solution(board, k) {
    let result = 0;
    // 이중 반복문 사용
    for (let i = 0; i < board.length; i ++) {
      // j는 각 행의 열을 순회하며 board[i][j] 값을 확인한다.
      for (let j = 0; j < board[i].length; j++) {
        // 조건식 i + j <= k 일때, answer를 board[i][j] 값의 합을 리턴한다.
        if (i + j <= k) {
          result += board[i][j];
        }
      }
    }
    
    return result;
}