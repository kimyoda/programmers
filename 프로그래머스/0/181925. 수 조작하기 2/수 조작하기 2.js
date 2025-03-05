// 정수배열 numLog
// numLog[0]에서 시작해 "w", "a", "s", "d"이루어진 문자열을 입력 받아 순서대로 조작한다.
// 각 케이스마다 값이 있고, i번의 조작을 가한 결과가 저장되어있다.
function solution(numLog) {
  let commandStr = "";
  // 반복문을 통하여 조작을 할 때마다 현재값과 이전값의 차이를 계산하여 반복한다.
  for (let i = 1; i < numLog.length; i++) {
    const diffedValue = numLog[i] - numLog[i - 1];

    switch (diffedValue) {
      // +1이면 "w"
      case 1:
        commandStr += "w";
        break;
      // -1이면 "s"
      case -1:
        commandStr += "s";
        break;
      // +10이면 "d"
      case +10:
        commandStr += "d";
        break;
      // -10이면 "a"
      case -10:
        commandStr += "a";
        break;
    }
  }
  return commandStr;
}

function solution2(numLog) {
  // 변수 선언
  let commandStr = "";

  // forEach를 활용하고 slice로 numLog[i]의 현재값과 이전값을 통해 값 할당하기
  numLog.slice(1).forEach((el, i) => {
    // 현재값 - 이전 값
    const diff = el - numLog[i];

    switch (diff) {
      case 1:
        commandStr += "w";
        break;
      case -1:
        commandStr += "s";
        break;
      case 10:
        commandStr += "d";
        break;
      case -10:
        commandStr += "a";
        break;
    }
  });

  return commandStr;
}
// 외부 함수로 switch문을 분리하여 값을 받아오기
function getCommand(diff) {
  switch (diff) {
    case 1:
      return "w";
    case -1:
      return "s";
    case 10:
      return "d";
    case -10:
      return "a";
    default:
      return ""; // 예외 처리
  }
}

function solution3(numLog) {
  const commandStr = numLog
    .slice(1)
    .map((el, idx) => getCommand(el - numLog[idx]))
    .join("");

  return commandStr;
}
