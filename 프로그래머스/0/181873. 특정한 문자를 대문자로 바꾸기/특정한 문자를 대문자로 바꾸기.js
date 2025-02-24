// my_string 영소문자 문자열, alp 영소 문자 1글자
// my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾸기
function solution(my_string, alp) {
  // 1. replaceAll을 활용하여 alp의 해당하는 부분을 대문자로 바꾼다.
  const changedChar = my_string.replaceAll(alp, alp.toUpperCase());

  return changedChar;
}

function solution2(my_string, alp) {
  // 1. split와 join을 활용하여 alp를 대문자로 바꾸고 문자열로 변환하여 할당한다.
  const changedChar = my_string.split(alp).join(alp.toUpperCase());

  return changedChar;
}
