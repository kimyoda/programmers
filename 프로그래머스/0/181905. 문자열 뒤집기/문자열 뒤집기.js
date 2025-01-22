// 문자열 my_string, 정수 s, e가있다.
// 인덱스 s부터 e까지를 뒤집은 문자열을 리턴
// s~e전부분, e 이후부분 또 따로 처리
function solution(my_string, s, e) {
  // 1. 인덱스 s 이전부분
  const strBefore = my_string.slice(0, s);
  // 2. s부터 e까지 뒤집는 구간
  const reversedStr = my_string.slice(s, e + 1).split("").reverse().join("");
  // 3. e이후부터 문자열
  const afterStr = my_string.slice(e + 1);
  // 4. 구간 합치기
  const finalReversedStr = strBefore + reversedStr + afterStr;
  return finalReversedStr;
}