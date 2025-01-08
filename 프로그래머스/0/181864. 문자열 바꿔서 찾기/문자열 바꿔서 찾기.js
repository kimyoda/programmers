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

function solution2(myString, pat) {
  // map 매서드를 활용하여 문제풀기
  // myString을 얕은복사한뒤 map() 메서드를 활용하여 각 문자를 변환한다. 
  // map()은 배열의 각 요소를 순회하여 콜백함수에 따라 새로운 배열을 반환한다. 
  // map 내부 조건식은 char가 A이면 B로, B이면 A로 바꾸고 그 외에는 char를 그대로 유지한다.
  // join을 활용하여 배열을 문자열로 변환하여 변수에 할당한다.
  // 메서드 체이닝을 통해 변환 과정을 한꺼번에 처리한다. 메서드체이닝은 여러 메서드를 연속으로 호출하여 한 번에 처리하는 방식이다. 
  const changedStr = [...myString].map(char => char === "A" ? "B" : char === "B" ? "A" : char).join("");
  
  // 할당받은 변수를 includes를 활용하여 pat에 해당하면 1 아니면 0을 리턴하여 종료한다.
  return changedStr.includes(pat) ? 1 : 0;

}