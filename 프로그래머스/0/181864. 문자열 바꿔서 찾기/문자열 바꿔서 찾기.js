// 1. "A", "B"로 이루어진 문자열 myString, pat이있다.
// 2. myString의 A를 B로, B를 A로 바꾼 문자열의 연속하는 부분 문자열
// 3. pat이 있으면 1을 아니면 0을 리턴해라.
function solution(myString, pat) {
  // 변수에 빈문자열 값 할당
  let changedStr = "";
  // 문자열을 순회하여 각 문자를 변환한다.
  for (let i = 0; i < myString.length; i++) {
    // 1. 현재 문자가 A면 전부 B로 변경하고 추가한다.
    if (myString[i] === "A") {
      changedStr += "B";
    // 2. 현재 문자가 B면 전부 A로 변경하고 추가한다. 
    } else if (myString[i] === "B") {
      changedStr += "A";  
    }
  }
  // includes메서드를 사용하고 삼항연산자를 활용해 pat이 있으면 1 없으면 0을 반환한다.
  return changedStr.includes(pat) ? 1 : 0;
}