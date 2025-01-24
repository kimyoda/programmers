// 문자열 my_string, 정수배열 indices가 있다.
// my_string에서 indices 원소에 해당하는 인덱스의 글자를 지운다.
// 이후 문자열을 리턴해라.
function solution(my_string, indices) {
  // 1. filter를 통해 포함되지 않은 인덱스의 문자만 선택한다.
  // 2. 선택된 문자들을 배열로 반환한 후, join을 사용해 하나의 문자열로 결합한다.
  const filteredStr = [...my_string].filter((el, idx) => !indices.includes(idx)).join("");
    
  return filteredStr;
}