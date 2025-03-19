// 문자열 배열 arr
// arr의 원소들을 순서대로 이어붙인 문자열
function solution(arr) {
  const changedStrList = arr.join("");

  return changedStrList;
}

function solution2(arr) {
  // for 문
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}
