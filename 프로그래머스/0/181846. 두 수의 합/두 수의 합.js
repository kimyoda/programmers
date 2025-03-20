// 0 이상의 두 정수 문자열 a, b
// a + b를 문자열로 리턴
function solution(a, b) {
  // a, b 정수가 문자열로 정수로 변환
  // 정수형의 한계를 넘는 값 사용을 위해 BigInt 사용
  const sumNumberStr = BigInt(a) + BigInt(b);

  return String(sumNumberStr);
}