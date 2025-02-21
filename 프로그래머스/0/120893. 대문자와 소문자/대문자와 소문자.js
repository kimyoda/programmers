// my_string이 매개변수일 때
// 대문자 -> 소문자, 소문자 -> 대문자로 변환
function solution(my_string) {
  // split로 배열로 바꾼뒤 map으로 대문자일경우 소문자, 소문자일 경우 대문자로 바꾸고 join으로 문자열로 만든다.
  const changedToUpperToLowerStr = my_string.split("").map(el => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join("");
    
  return changedToUpperToLowerStr;
}
