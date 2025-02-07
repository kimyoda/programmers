// 문자열 s "Z"와 숫자로 이루어진
// 문자열안에 있는 숫자를 차례대로 더한다
// "Z"가 나오면 바로 전에 더했던 숫자를 뺀다.
function solution(s) {
  // 1. 공백을 기준으로 문자열을 나누어 배열로 변환, 숫자를 저장할 배열 선언
  const arr = s.split(" ");
  const sumZNumbers = [];
   
  // 2. "Z"가 나오면 바로 전에 더했던 숫자를 뺀다
  for (let item of arr) {
    if (item === "Z") {
      // 순회하면서 더했던 값을 빼야하기에 pop
      sumZNumbers.pop();
    } else {
      // 숫자면 Number로 변환 후 sumZNumbers에 추가
      sumZNumbers.push(Number(item));
    }
  };
  // 숫자만 남은 값들을 전부 더한다
  const orderedSum = sumZNumbers.reduce((acc, cur) => acc + cur, 0);
    
  return orderedSum;
}