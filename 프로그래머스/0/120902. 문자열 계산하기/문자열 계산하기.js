// 문자열로된 수식(+, -)
// my_string 매개변수 -> 수식을 계산한 값
// 공백이 없다. 0으로 시작하는 숫자는 없다.
function solution(my_string) {
  // 1. 문자열을 공백으로 쪼개서 공백을 제외시킨다.
  const arr = my_string.split(" ");

  // 2. reduce를 이용해 왼쪽부터 계산식을 수행한다.
  const result = arr.reduce((acc, cur, idx) => {
    // 3. 누적 결과를 담을 변수 (acc에서 출발)
    let currentTotal = acc;
    // 4. cur이 연산자면, 그 다음 숫자를 확인해서 acc에 반영한다. +,- 연산자를 계산하여 저장한다.
    if (cur === "+") {
      currentTotal = acc + Number(arr[idx + 1]);
    } else if (cur === "-") {
      currentTotal = acc - Number(arr[idx + 1]);
    }
    // 5. cur이 숫자일 경우 acc 그대로 유지된다.
    return currentTotal;
    // 초기화된 첫 번째는 숫자를 정수로 변환한 값이다.
  }, Number(arr[0]));

  return result;
}
