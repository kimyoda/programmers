// 알파벳 소문자로 이루어진 문자열 myString
// 알파벳 순서에서  "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 리턴
function solution(myString) {
// 1. l보다 앞서는 문자열
// 2. myString을 배열로 할당하고, map을 통하여 요소가 l보다 작을때와 클때를 조건을 할당하여 문자열로 변환하여 할당한다.
  // 전개 구문으로 변수를 할당한다.
  const copiedmyStr = [...myString];
  // map과 삼항연산자를 활용하여 요소가 l보다 작으면 l 아니면 el로 문자열로 변환한다.
  const lmakedStr = copiedmyStr.map((el) => el < 'l' ? 'l' : el).join('');
  
  return lmakedStr;
}

