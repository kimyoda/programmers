// 한 자리 정수로 이루어진 문자열
// num_str에서 자리수의 합을 리턴
function solution(num_str) {
  // 1. 문자열 num_str을 spilt로 배열로 만들고, 각 자리의 합을 rudece로 구하여 할당한다.(합쳐지는 수를 Number로 변환한다.)
  const sumOfStrNumbers = num_str.split("").reduce((acc, cur) => acc + Number(cur), 0);
    
  return sumOfStrNumbers;
}


