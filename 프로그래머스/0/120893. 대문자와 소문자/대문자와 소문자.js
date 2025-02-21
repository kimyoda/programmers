// my_string이 매개변수일 때
// 대문자 -> 소문자, 소문자 -> 대문자로 변환
function solution(my_string) {
  // split로 배열로 바꾼뒤 map으로 대문자일경우 소문자, 소문자일 경우 대문자로 바꾸고 join으로 문자열로 만든다.
  const changedToUpperToLowerStr = my_string
    .split("")
    .map((el) =>
      el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
    )
    .join("");

  return changedToUpperToLowerStr;
}

function solution2(my_string) {
  let result = "";

  for (let i = 0; i < my_string.length; i++) {
    const value = my_string[i];
    // 대문자를 담은 변수 할당
    const upperCaseValue = value.toUpperCase();
    // 소문자를 담은 변수 할당
    const lowerCaseValue = value.toLowerCase();
    // 각 경우의 수에 따라 대문자, 소문자를 변환
    if (value === upperCaseValue) {
      // 대문자일때 소문자로 변환
      result += lowerCaseValue;
    } else {
      result += upperCaseValue;
    }
  }
  return result;
}
