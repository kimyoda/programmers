// 문자열 code
// code를 앞에서부터 읽고 문자가 "1"이면 mode를 바꾼다.
// mode에 따라 code를 읽어가면서 문자열 ret을 만든다.
// mode는 "0"과 "1"이 있고, idx를 0부터 code.length - 1 까지 1씩 키워나가고 code[idx]값에따라 행동한다.
// mode가 0일때, code[idx] "1"이 아니면 idx가 짝수일때 ret의 맨뒤에 code[idx]를 추가한다. code[idx] "1"이면 mode를 0에서 1로 바꾼다.
// mode가 1일때, code[idx]가 "1"이 아니면 idx가 홀수 일때 ret의 맨 뒤에 code[idx]를 추가한다.
// code[idx]가 "1"이면 mode를 1에서 0으로 바꾼다.
// 단 mode는 0이고 return하는 ret이 빈 문자열이면 "EMPTY"를 리턴한다.
function solution(code) {
  // 문자열 ret과 mode를 초기화하고 할당한다. mode는 0부터 시작한다.
  let ret = "";
  let mode = 0;
  // 반복문을 통해 처음부터 끝까지 순회한다.
  for (let i = 0; i < code.length; i++) {
    // 1. mode가 0일 때
    if (mode === 0) {
      // 1-2 code[i]가 "1이" 아니고 i가 짝수면 -> ret에 code[i]를 추가한다.
      if (code[i] !== "1" && i % 2 === 0) {
        ret += code[i];
        // 1-3 code[i]가 "1"이면 -> mode를 0에서 1로 바꾼다.
      } else if (code[i] === "1") {
        mode = 1;
      }
    } else {
      // 2. mode가 1일때
      // 2-1 code[i]가 "1"이 아니고 i가 홀수면 -> ret에 code[i]를 추가한다.
      if (code[i] !== "1" && i % 2 !== 0) {
        ret += code[i];
        // 2-2 code[i]가 "1"이면 -> mode를 1에서 0으로 바꾼다.
      } else if (code[i] === "1") {
        mode = 0;
      }
    }
  }
  // 3. ret이 빈 문자열이면 "EMPTY"를 아니면 ret을 리턴한다.
  return ret === "" ? "EMPTY" : ret;
}
