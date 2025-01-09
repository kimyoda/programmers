// 정수배열 arr, 숫자 n이 있다.
// arr의 length가 홀수면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열
// arr의 length가 짝수면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열
function solution(arr, n) {
  // 전개 구문으로 선언
  const copiedArr = [...arr];

  let addValue = n;
  // 반복문
  for (let i = 0; i < copiedArr.length; i++) {
    // 1. arr 길이가 홀수면 arr의 모든 짝수인덱스 위치에 n을 더한 배열을 할당한다.
    if (copiedArr.length % 2 !== 0 && i % 2 === 0) {
      copiedArr[i] += addValue;
      // 2. arr 길이가 짝수면 arr의 모든 홀수인덱스 위치에 n을 더한 배열을 할당한다.
    } else if (copiedArr.length % 2 === 0 && i % 2 !== 0) {
      copiedArr[i] += addValue;
    }
  }
  return copiedArr;
}

function solution2(arr, n) {
  const addValue = n;

  const arrLength = arr.length;
  // map을 활용하여 el, idx를 통해 arrLength가 홀수면 짝수인덱스 위치에 el을 더한 새로운 배열을 할당한다.
  const arrSum = arr.map((el, idx) => {
    if (arrLength % 2 !== 0 && idx % 2 === 0) {
      return el + addValue;
    }
    // el, idx를 통해 arrLength가 짝수면 홀수인덱스 위치에 el을 더한 새로운 배열을 할당한다.
    if (arrLength % 2 === 0 && idx % 2 !== 0) {
      return el + addValue;
    }
    return el;
  });
  return arrSum;
}
