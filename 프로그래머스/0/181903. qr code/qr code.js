// 문자열 code, 정수 q, r이있다.
// code의 인덱스를 q 로 나눌때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어붙여라
// 이어붙인 문자열을 리턴해라.
function solution(q, r, code) {
  // 1. 문자열 code를 q의 인덱스로 나눈 나머지 r
  // 2. filter를 통해 q === r로 나머지가 r인 경우에만 조건에 맞는 문자만 선택하여 배열로 반환한다.
  // 3. 새로운 배열을 join으로 문자열로 변환하여 리턴한다.
  const filteredStr = [...code].filter((el, idx) => idx % q === r).join("");

  return filteredStr;
}