// 1. 짝수면 반 나누고, 홀수면 1을 뺀뒤 반으로 나눈다.
// 2. 최종값이 1이 되어야 한다.
// 3. 정수배열 num_list가 있을때 연산의 횟수를 리턴해라.
function solution(num_list) {
  // 1. 위 1~2에 해당하는 조건에 맞는 연산 구현
  const oneNumberedcounts = num_list.map(el => {
    // 1로 만드는 연산횟수
    let count = 0;
    // 숫자가 1이 될때까지 반복한다.
    while (el > 1) {
      if (el % 2 === 0) {
        // 짝수면 반으로 나누기
        el = el / 2;
      } else {
        // 홀수면 1을 빼고 반으로 나누기
        el = (el - 1) / 2;
      }
      // 연산 횟수가 위 조건에 맞으면 증가한다.
      count++;
    }
      // 최종 연산횟수를 반환한다.
    return count;  
  });
  // 모든 숫자, 연산 횟수를 합산하여 반환하다.
  return oneNumberedcounts.reduce((a, b) => a + b, 0);
}