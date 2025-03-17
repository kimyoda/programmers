// 정수배열 num_list에서
// 홀수, 짝수 조건으로 각각 이어붙인다.
// 두 숫자의 합을 정수로 반환한다.
function solution(num_list) {
  // *연산자를 활용하여 이어붙이고 더하기
  let oddSumNumbers = 0;
  let evenSumNumbers = 0;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      // 짝수의 수를 구하는 로직 이후, 기존 값을 10배로 곱하고, 현재 숫자를 더해 이어붙인다. (홀수도 동일하다)
      evenSumNumbers = evenSumNumbers * 10 + num_list[i];
    } else {
      oddSumNumbers = oddSumNumbers * 10 + num_list[i];
    }
  }
  // 짝수 이어붙인 수와 홀수 이어붙인 수를 반환한다.
  const sumNumbers = evenSumNumbers + oddSumNumbers;

  return sumNumbers;
}

function solution2(num_list) {
  // filter 활용
  // 짝수 전부 합, 홀수 전부 합
  const evenSumNumbers = num_list.filter((el) => el % 2 === 0);
  const oddSumNumbers = num_list.filter((el) => el % 2 !== 0);

  // 새로운 정수배열 evenSumNumbers, oddSumNumbewrs를 join으로 문자열 변환
  const evenSumString = evenSumNumbers.join("");
  const oddSumString = oddSumNumbers.join("");

  // 문자열로된 값들을 Number로 변환하여 정수로 변환후 값 담기
  const sumNumbers = Number(evenSumString) + Number(oddSumString);

  return sumNumbers;
}
