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

function solution2(arr, n) {
  // for문으로 arr길이만큼 순회하여 각 조건에 해당할 때 값을 추가한다.
  for (let i = 0; i < arr.length; i++) {
    // 1. arr.length가 홀수면 짝수인덱스 위치에 i만큼 더한값을 추가.
    if (arr.length % 2 !== 0 && i % 2 === 0) {
      arr[i] += n;
      // 2. arr.length가 짝수면 홀수인덱스 위치에 i만큼 더한값을 추가
    } else if (arr.length % 2 === 0 && i % 2 !== 0) {
      arr[i] += n;
    }
  }
  return arr;
}
