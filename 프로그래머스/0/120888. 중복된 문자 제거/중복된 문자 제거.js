// 1. my_string 문자열
// 2. my_string 중복된 문자 제거, 하나의 문자 남긴 문자열 리턴
// 3. 대문자 소문자 구분, 공백도 문자로 구분?
// 4. 중복된 문자 중 가장 앞에 있는 문자를 남긴다.
function solution(my_string) {
  // 1. 문자열을 배열로 스프레드 연산자로 ㅂ얕은복사
  const copiedStr = [...my_string];
  // 2. 배열로 filter로 만든다.
  // 3. 배열로 만든 문자열에서 indexOf의 요소가 idx와 같을때 join으로 문자열로 리턴한다. 첫 번째로 등장하는 문자를 남긴다.
  const uniqueChars = copiedStr.filter((el, idx) => copiedStr.indexOf(el) === idx).join("");
  
  return uniqueChars;
}