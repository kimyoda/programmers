// i, j, k가 있을 때 i ~ j까지 k 횟수
// k가 1이면 i j 1 13일때 1, 10, 11(1, 1 2번;), 12, 13
// i, j를 문자열 배열로 변환
// k의 등장 횟수세기
function range(i, j) {
  let concatenatedNumbers = "";
  for (let num = i; num <= j; num++) {
    concatenatedNumbers += String(num);
  }
  return concatenatedNumbers;
}

function solution(i, j, k) {
 // 1. range함수로 i ~ j 범위의 문자열 생성
  const checkedStr = range(i, j);
 // 2.split와 filter로 등장 횟수를 세고 리턴한다.
  const filteredStr = checkedStr.split("").filter((el) => el === String(k)).length;
    
  return filteredStr;
}