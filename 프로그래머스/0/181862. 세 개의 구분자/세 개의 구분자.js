// myStr에서 "a", "b", "c"로 구분자로 사용한다
// 위 3가지로 문자 외에 다른문자가 없으면 빈배열 ["EMPTY"]를 리턴
function solution(myStr) {
  // 1. split로 a, b, c를 나누는데 join으로 문자열을 할 때 빈칸으로 구분을 유지한다.
 // 2. filter를 통해 문자열인지 아닌지에 따라 새로운 배열로 반환
  const filteredStr = myStr.split("a").join(" ").split("b").join(" ").split("c").join(" ").split(" ").filter(el => el);
  return filteredStr.length ? filteredStr : ["EMPTY"]; 
}