// 1. arr 정수배열이 있다.
// 2. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 0을 추가한다.
// arr의 최소한의 개수로 0을 추가한 배열 리턴
function solution(arr) {
  let copiedArr = [...arr];
  // 1. arr 정수의 길이가 2의 거듭제곱인지 판단한다.
  while (true) {
    // 2. 거듭제곱이 아니면 배열에 0을 추가한다.(Math.log2 라는 매서드를 활용하여 작성함)
    // 3. Number.isInteger() 전발받은 값의 정수 여부를 판별
    if (Number.isInteger(Math.log2(copiedArr.length))) {
      // 2의 제곱이면 반복 종료
      break;        
    } else {
      // 3. 0을 추가한 배열을 리턴
      copiedArr.push(0);
    }
  }
  return copiedArr;
}