// arr을 이용해 stk
// i 초기값 0 i가 arr길이보다 작으면 반복
// stk 빈배열 arr[i] stk에 추가 i에 1을 더한다
// stk 원소가 있고 stk의 마지막원소 arr[i]같으면 stk 마지막 원소를 stk에서 제거, i에 1을 더한다
// 마지막 원소가 arr[i]와 다르면 stk 마지막에 arr[i]를 추가
function solution(arr) {
  // 변수 선언
  const stk = [];
    
  // 1. 조회하여 순회
  arr.forEach((el) => {
    // 2. 비어있으면 추가한다.
    if (stk.length === 0) {
      stk.push(el);
    // 3. 마지막 요소가 현재값과 같으면 제거하고 더한다.
    } else if (stk[stk.length - 1] === el) {
      stk.pop();
    } else {
      // 다른값을 더한다
      stk.push(el);
    }
  });
    
  return stk.length ? stk : [-1];
}