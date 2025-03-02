// 숫자 n, k가 있을 때
// 1 이상 n 이하의 정수중 k의 배수를
// 오름차순으로 저장한 배열을 리턴.
function solution(n, k) {
  // 1. 변수 선언
  const answer = [];
  // 2. result 길이구하는걸 고민하자
  // n이있고 k가 반복해서 n만큼 안넘고
  for (let i = 1; i <= n / k; i++) {
    answer.push(i * k);
  }
  return answer;
}

function solution2(n, k) {
  // Array.from을 활용하여 n이 k의 오름차순으로 오는 배열을 만들어 반환한다.(filter로 값을 필터하여 담는다).
  const filteredArr = Array.from({ length: n }, (_, i) => i + 1).filter(
    (el) => el % k === 0
  );

  return filteredArr;
}
