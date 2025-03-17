// 정수 배열 num_list
// 1. 모든 원소들의 곱 < 모든 원소들의 합의 제곱 -> 1(true);
// 2. 모든 원소들의 곱 > 모든 원소들의 합의 제곱 -> 0(false);
// 위의 방식이 나오도록 리턴
function solution(num_list) {
  let isSumSquareGreater = 0;

  // 모든 원소들의 곱
  let totalProduct = 1;
  // 모든 원소들의 합
  let totalSumOfElements = 0;

  // num_list의 길이만큼 반복
  for (let i = 0; i < num_list.length; i++) {
    // 곱셈 할당 연산자로 모든 원소들의 곱을 변수에 누적한다.
    totalProduct *= num_list[i];
    // 덧셈 할당 연산자로 모든 원소들의 합을 변수에 누적한다.
    totalSumOfElements += num_list[i];
  }
  // 삼항연산자를 활용해 모든 원소들의 합의 제곱이 모든 원소들의 합보다 크면 1을 반환 아니면 0을 할당하는 삼항연산자 작성
  return (isSumSquareGreater = totalSumOfElements ** 2 > totalProduct ? 1 : 0);
}

function solution2(num_list) {
  // reduce 활용
  // 배열의 모든 원소(누적값, 현재값)을 곱한 값을 구한다.
  const totalProduct = num_list.reduce((acc, cur) => acc * cur, 1);

  // 배열의 모든 원소(누적값, 현재값)을 합한 값을 구하고 거듭제곱을 한다. 초기값 0
  const sumSquared = num_list.reduce((acc, cur) => acc + cur, 0) ** 2;

  const isSumSquareGreater = sumSquared > totalProduct ? 1 : 0;

  return isSumSquareGreater;
}
