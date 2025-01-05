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
          n += 1; // "w"가 나오면 n을 1증가
          break;
        case "s":
          n -= 1; // "s"가 나오면 n을 1감소시킨다.
          break;
        case "d":
          n += 10; // "d"가 나오면 n을 10증가시킨다.
          break;
        case "a":
          n -= 10; // "a"가 나오면 n을 10 감소시킨다.
          break;
      }        
      numbersControl = n;
    }
    return numbersControl;
}