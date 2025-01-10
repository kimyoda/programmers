// 문자열 배열 my_strings, 이차원? 정수 배열 parts
// parts[i]는 [s, e], my_string[i] 인덱스 s부터 e까지 부분 문자열을 의미한다.
// 각 my_strings 원소의 parts에 해당하는 부분 문자열을 순서대로 이어붙여라.
function solution(my_strings, parts) {
  // 1. my_strings[i] 문자열 배열에서 parts[i] 까지넘지않고 반복
  let sumStr = [];
  // 2. 이차원 배열 선언도 해야함. const arr = [][]
  // 3. 반복된 값을 my_strings 원소에 parts 해당 부분
  for (let i = 0; i < my_strings.length; i++) {
    // 이차원배열에 접근하는방법
    // 이차원배열의 첫번째 인덱스를 반복하여 값을 넣고, 두번째 인덱스를 반복하여 값을 넣는다.
    // 첫 번째 인덱스 값(부분 문자열의 시작 위치)
    const firstArrIndex = parts[i][0];
    // 두 번째 인덱스 값 (부분 문자열의 종료 위치)
    const secondArrIndex = parts[i][1];
    // sumStr을 my_strings[i]에 substring으로 시작인덱스부터 종료 인덱스전까지 문자열의 부분 문자열을 반환한다.
    // my_strings[i]는 문자열이므로 substrting 메서드 사용가능
    // substring의 두번째인덱스에 +1을 한 이유는, firstArrIndex, secondArrIndex까지의 부분 문자열을 추출하여 결과 문자열에 추가한다.
    sumStr += my_strings[i].substring(firstArrIndex, secondArrIndex + 1);
  }
  return sumStr;
}
