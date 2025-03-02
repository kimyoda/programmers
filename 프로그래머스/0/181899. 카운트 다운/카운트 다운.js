// start_num, end_num있다.
// start_num에서 end_num까지 1씩 감소하는 수를 배열로 담아라.
function solution(start_num, end_num) {
  const counts = [];
  // 1. for문으로 start_num에서 end_num까지 1씩 감소하기
  for (let i = start_num; i >= end_num; i--) {
    counts.push(i);
  }

  return counts;
}

function solution2(start_num, end_num) {
  // Array.from을 활용하여 배열을 생성하면서 값을 자동으로 채운다.
  const counts = Array.from(
    { length: start_num - end_num + 1 },
    (_, i) => start_num - i
  );

  return counts;
}
