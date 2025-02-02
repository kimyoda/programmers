// 1. 빈배열 x에서 arr 정수배열, flag boolean 배열
// 2. flag[i]가 true면 x의 뒤에 arr[i] * 2추가
// flag[i]가 false면 x에서 arr[i]의 원소를 제거한다.
function solution(arr, flag) {
  // 1. 빈배열 x
  let X = [];
  // 2. flag를 순회하고 true면 X의뒤에 arr[i]를 x2번추가(push추가)
  arr.forEach((el, i) => {
    // flag[i]가 true일 경우
    if (flag[i]) {
      // flag[i]가 true면 arr[i] * 2
      for (let j = 0; j < el * 2; j++) {
        X.push(el);
      }
    } else {
      // flag[i]가 false면 arr[i]마지막 요소 제거
      for (let j = 0; j < el; j++) {
        X.pop(); 
      }
    }
  });
  // 3. flag[i]가 false면 마지막 arr[i]개의 원소를 제거(pop이용)
  return X;
}