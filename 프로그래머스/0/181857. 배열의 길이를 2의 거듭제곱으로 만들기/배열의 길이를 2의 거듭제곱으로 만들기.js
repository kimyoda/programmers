// 1. arr 정수배열이 있다.
// 2. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 0을 추가한다.
// arr의 최소한의 개수로 0을 추가한 배열 리턴
function solution(arr) {
  let paddedArr = [...arr];
  // 1. arr 정수의 길이가 2의 거듭제곱인지 판단한다.
  while (true) {
    // 2. 거듭제곱을 표현하는 변수명 할당(Math.log2 라는 매서드를 활용하여 작성함)
    const logValue = Math.log2(paddedArr.length);

    // 3. Number.isInteger() 전발받은 값의 정수 여부를 판별
    // 소수면 false 정수면 true값
    if (Number.isInteger(logValue)) {
      // 2의 제곱이면 반복 종료
      break;
    }
    // 0을 추가
    paddedArr.push(0);
  }
  return paddedArr;
}
