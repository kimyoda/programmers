// strlist문자열 배열
// 각 원소 길이를 담은 배열 리턴
function solution(strlist) {
  // map 메서드를 통해 strlist 배열의 문자열 길이를 계산한다.
  // el은 문자열 요소를 나타내고, el.length로 문자열길이를 구한다.
  const length = strlist.map(el => el.length);
    
  return length;
}