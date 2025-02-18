// num_list 정수 배열
// num_list 원소 중 짝수와 홀수 개수 담은 배열을 리턴
function solution(num_list) {
  // 1. 짝수만 모아놓은 배열, filter로 짝수만 걸러서 새로운 배열의 개수로로 할당한다.
  const evenCount = num_list.filter((el) => el % 2 === 0).length;
  // 2. 홀수만 모아놓은 배열, filter로 홀수만 걸러서 새로운 배열개수로 할당한다.
  const oddCount = num_list.filter((el) => el % 2 !== 0).length;

  return [evenCount, oddCount];
}

function solution2(num_list) {
  // 변수 선언
  let evenCount = 0;
  let oddCount = 0;

  // forEach와 삼항연산자를 활용하여 짝수, 홀수 개수 구하기
  num_list.forEach((el) => {
    el % 2 === 0 ? evenCount++ : oddCount++;
  });

  return [evenCount, oddCount];
}
