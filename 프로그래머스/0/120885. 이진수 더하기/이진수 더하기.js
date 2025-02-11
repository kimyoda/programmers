// 2진수 문자열의 합이 2진수가 되도록한다.
function solution(bin1, bin2) {
  // parseInt로 2진수로 바꾼뒤에 더한값을 변수에 할당한다.
  const binarySum = parseInt(bin1, 2) + parseInt(bin2, 2);
  // 더해진 값을 toString을 통해 문자열 이진수로 반환한다. 
  return binarySum.toString(2);
}