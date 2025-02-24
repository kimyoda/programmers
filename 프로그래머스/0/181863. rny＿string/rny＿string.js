// 1. rny_string을 모든 m을 rn으로 바꾼 문자열 리턴(영소문자)
function solution(rny_string) {
  // replaceAll로 m을 rn으로 전부 바꾼다.
  const changedChar = rny_string.replaceAll("m", "rn");

  return changedChar;
}

function solution2(rny_string) {
  const changedChar = rny_string.split("m").join("rn");

  return changedChar;
}
