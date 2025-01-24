// 피자는 2 ~ 10조각수로 잘라준다.
// 피자수 slice, 먹는 사람의 수 n이 매개변수
// n명이 사람이 최소 한 조각이상의 피자를 먹기위한 값 리턴
function solution(slice, n) {
  // Math.ceil을 이용해 필요한 피자 수를 올림처리한다.(남은 조각이 있어도 한판을 추가한다)
  const pizzaPans = Math.ceil(n / slice);
  
  return pizzaPans;
}