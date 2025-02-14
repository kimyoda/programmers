// 1. start_num, end_num이 있다.(정수)
// 2. start_num ~ end_num까지 차례로 담은 리스트 리턴
function solution(start_num, end_num) {
  const countNumbers = [];
  // i가 0부터 반복해서, 정수 start_num에서 end_num을 넘지않고 반복하고 start_num을 i만큼 반복한 값을 새로운 배열로 반환한다.
  for (let i = 0; i <= (end_num - start_num); i++) {
    countNumbers.push(start_num + i);
  }
  return countNumbers;
}
