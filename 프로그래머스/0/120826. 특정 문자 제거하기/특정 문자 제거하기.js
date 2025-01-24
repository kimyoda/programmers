// my_string 문자열 문자 letter
// my_string에서 letter를 제거한 문자열 리턴
function solution(my_string, letter) {
  const someStrDelete = my_string.split(letter).join("");
  
  return someStrDelete;
}
