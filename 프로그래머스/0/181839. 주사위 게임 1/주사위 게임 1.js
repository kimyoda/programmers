// 두 주사위를 굴렸을 때 나온 숫자 a, b
// 1. a, b가 모두 홀수면 a(제곱) + b(제곱)점을 얻는다.
// 2. a, b 중하나가 홀수면 2 x (a+ b)점
// 3. a, b 모두 홀수가 아니면 |a - b|점을 얻는다.(절대값음수..?)
function solution(a, b) {
  // a, b를 변수를 선언하여 할당한다.
  const firstDiceNumber = a;
  const secondDiceNumber = b;
  
  // 1. a,b가 모두 홀수면 a(제곱) + b(제곱)을 더한 값을 할당한다.
  if (firstDiceNumber % 2 !== 0 && secondDiceNumber % 2 !== 0) {
    // 두 변수가 홀수면 제곱을 곱한 값을 더해 score 변수에 할당한다.
    return firstDiceNumber ** 2 + secondDiceNumber ** 2;
  // 2. a, b 중 하나만 홀수라면 2 x (a + b)점을 얻는다.
  } 
  
  // 하나만 홀수거나, 둘 다 홀수가 아닌 경우
  
  if (firstDiceNumber % 2 !== 0 || secondDiceNumber % 2 !== 0) {
    // or 연산자를 활용하여 두 변수 중 하나만 홀수면 두 변수를 더하고 2를 곱한 값을 할당한다.
    return 2 * (firstDiceNumber + secondDiceNumber);
  // 3. a, b 모두 홀수가 아니면 |a -b| 점을 얻는다.
  }
  
  if (firstDiceNumber % 2 === 0 && secondDiceNumber % 2 === 0) {
    // and 연산자를 활용하여 두 변수 모두 홀수가 아닐때, Math.abs 메서드를 활용해서 두 변수의 절대값을 구한다. 
    return Math.abs(firstDiceNumber - secondDiceNumber);
  } 
}