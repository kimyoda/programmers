// i를 만들어 초기값 0으로 설정하고 i가 arr길이보다 작으면 다음 작업반복
// 1. stk = [] 이면 arr[i] + stk추가하고 i + 1;
// 2. stk = 원소, stk의 마지막 원소가 arr[i]보다 작으면, arr[i]뒤에 stk를 추가, i + 1;
// 3. stk 원소가 있는데 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막원소를 stk에서 제거한다.
function solution(arr) {
    let copiedArrNumber = [...arr];
    // 반복문으로 i가 순회
    for (let i = 0; i < arr.length; i++) {
      // 1.stk =[]이면 arr[i] + stk추가 i + 1;
      if (copiedArrNumber.length === 0) {
        copiedArrNumber.push(arr[i]);
      // 2. stk 원소가 있으면 마지막 원소에arr[i]뒤에 추가하고 i에 1을 더한다.    
      } else if (copiedArrNumber[copiedArrNumber.length - 1] < arr[i]) {
      copiedArrNumber.push(arr[i]);    
      } else if (copiedArrNumber[copiedArrNumber.length - 1] >= arr[i]) {
      // 3. stk 원소가 있으면 arr[i]보다 크거나 같으면 마지막 원소를 제거(pop 메서드 활용)
      copiedArrNumber.pop();
      // 4. 현재 arr[i]를 처리해야 하므로 i++ 상쇄 후 처리
      i--;
      }
    }
    return copiedArrNumber;
}