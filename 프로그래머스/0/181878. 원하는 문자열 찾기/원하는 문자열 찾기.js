// 문자열 myString, pat이있다.
// myString의 부분 문자열 중에 pat이 존재하면 1 아니면 0을 반환
function solution(myString, pat) {
  const checkedStr = myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;

  return checkedStr;
}

function solution2(myString, pat) {
  // indexOf가 존재하면 0을 반환하기에 결과가 -1인지 하는 조건을 추가한다.
  const checkedStr =
    myString.toUpperCase().indexOf(pat.toUpperCase()) !== -1 ? 1 : 0;

  return checkedStr;
}
