// 문자열 s
// s에서 한번만 등장하는 문자
// 사전 순으로 정렬한 문자열 리턴
// 한번만 등장하는 문자가 없을 시 빈문자열 리턴
function solution(s) {
  // 1. 문자열 s가 한번만 등장하도록 indexOf로 첫번째 요소를 찾고 lastIndexOf로 마지막 요소를 찾아 찾으면 사전 순으로 정렬 후 join으로 다시 문자열로 리턴한다.
  const uniqueSortedChars = s.split("").filter((el) => s.indexOf(el) === s.lastIndexOf(el)).sort().join("");
  // 3. 없을시 빈문자열 리턴
  return uniqueSortedChars;
}