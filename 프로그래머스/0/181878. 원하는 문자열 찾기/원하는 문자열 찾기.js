// 문자열 myString, pat이있다.
// myString의 부분 문자열 중에 pat이 존재하면 1 아니면 0을 반환
function solution(myString, pat) {
  const checkedChar = myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
  
  return checkedChar;
}




