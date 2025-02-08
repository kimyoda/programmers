// 정수 a, b가 있고 boolean 변수 flag가 매개변수
// flag가 true면 a + b
// false면 a - b를 리턴
function solution(a, b, flag) {
  let isValues = 0;
  // flag가 true일때와 false일때  
  if (flag) {
    isValues = a + b;
  } else {
    isValues = a - b;
  }
  return isValues;
}