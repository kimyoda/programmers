// number정수 n의 배수이며 m의 배수
// 배수면 1 아니면 0 리턴
function solution(number, n, m) {
  const isMultiple = number % n === 0 && number % m === 0 ? 1 : 0;
  return isMultiple;
}

function solution2(number, n, m) {
  if (number % n === 0 && number % m === 0) {
    return 1;
  }
  return 0;
}
