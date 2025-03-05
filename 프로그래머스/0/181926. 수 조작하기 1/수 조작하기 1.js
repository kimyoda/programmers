// n과 문자열 control이 있다.
// control은 "w", "a", "s", "d" 4개의 문자
// 앞에서부터 순서대로 n의 값을 바꿈
function solution(n, control) {
  let numbersControl = n;

  // control 문자열을 순회하여 각 문자에 따라 n의 값을 변경한다.
  for (let i = 0; i < control.length; i++) {
    // control[i] 문자를 검사, 해당 문자에 따라n을 변경한다.
    // switch문을 사용하여 각 문자에 해당하는 조건을 처리한다.
    switch (control[i]) {
      case "w":
        numbersControl += 1; // "w"가 나오면 n을 1증가
        break;
      case "s":
        numbersControl -= 1; // "s"가 나오면 n을 1감소시킨다.
        break;
      case "d":
        numbersControl += 10; // "d"가 나오면 n을 10증가시킨다.
        break;
      case "a":
        numbersControl -= 10; // "a"가 나오면 n을 10 감소시킨다.
        break;
    }
  }
  return numbersControl;
}

// switch문을 외부 함수 표현식으로 빼서 활용한다.
// 문자 입력에 따라 값을 반환하는 함수
function numbersControl(char) {
  // switch문으로 각 조건에 따라 값을 받는다.
  switch (char) {
    case "w":
      return 1;
    case "s":
      return -1;
    case "d":
      return 10;
    case "a":
      return -10;
    default:
      return 0;
  }
}

function solution2(n, control) {
  // 1. n을 control 문자열에 따라 조작하는 함수
  // 2. control 문자열을 하나씩 분리(split)한 후, reduce를 이용해 값을 누적
  const controlNumbers = control
    .split("")
    .reduce((acc, cur) => acc + numbersControl(cur), n);

  return controlNumbers;
}
