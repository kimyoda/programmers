// 문자열 my_string, 정수 n이 있다.
// my_string의 뒤의 n글자로 이루어진 문자열 리턴.
function solution(my_string, n) {
  // 문자열 my_string의 뒤쪽 n글자를 추출하기 위해 slice 사용. -n을 통해 문자열의 끝에서 n글자를 가져온다.
  const lastStr = my_string.slice(-n);

  return lastStr;
}

function solution2(my_string, n) {
  // substring을 활용해여 n글자를 가져온다
  const lastStr = my_string.substring(my_string.length - n);

  return lastStr;
}
