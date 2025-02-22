// 정수배열 arr, 숫자 n이 있다.
// arr의 length가 홀수면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열
// arr의 length가 짝수면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열
function solution(arr, n) {
  const arrLength = arr.length;
  // map을 활용하여 el, idx를 통해 arrLength가 홀수면 짝수인덱스 위치에 el을 더한 새로운 배열을 할당한다.
  const arrSum = arr.map((el, idx) => {
    if (arrLength % 2 !== 0 && idx % 2 === 0) {
      el += n;
    }
    // el, idx를 통해 arrLength가 짝수면 홀수인덱스 위치에 el을 더한 새로운 배열을 할당한다.
    if (arrLength % 2 === 0 && idx % 2 !== 0) {
      el += n;
    }
    return el;
  });
  return arrSum;
}