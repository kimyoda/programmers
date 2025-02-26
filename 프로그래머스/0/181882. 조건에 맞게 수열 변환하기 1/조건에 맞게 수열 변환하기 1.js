// // 정수 배열 arr의 값이 50보다 크거나 짝수면 2로 나눈다.
// // 50보다 작은 홀수면 2를 곱한다.
// // 그 결과인 정수 배열을 리턴한다.
function solution(arr) {
  const transFormedSequence = [];
  // forEach를 활용하여 배열을 순회한다.
  arr.forEach((el) => {
    // 1. arr의 el이 50보다 크거나 같은 짝수
    if (el >= 50 && el % 2 === 0) {
      // el을 2로 나눈값을 배열에 추가한다.
      transFormedSequence.push(el / 2);
      // 2. arr의 el이 50보다 작은 홀수
    } else if (el < 50 && el % 2 !== 0) {
      // 3. el을 2로 곱한다.
      transFormedSequence.push(el * 2);
      // 4. 그 외의 값을 추가한다.
    } else {
      transFormedSequence.push(el);
    }
  });
  return transFormedSequence;
}

function solution2(arr) {
  const transformedValue = arr.map((value) => {
    if (value >= 50 && value % 2 === 0) {
      return value / 2; // 50 이상 짝수 일때 나누기
    } else if (value < 50 && value % 2 !== 0) {
      return value * 2; // 50 이하 홀수 일때 곱하기
    }
    return value; // 그 외의 값
  });
  return transformedValue; // 최종 변환값 반환
}
