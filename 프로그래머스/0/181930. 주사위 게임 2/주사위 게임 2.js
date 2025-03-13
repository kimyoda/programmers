// 1. a, b, c 점수
// 2. 세 숫자가 모두 다르면 a + b + c
// 3. 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면
// (a + b + c) * (a제곱, b제곱, c제곱) 점을 얻는다.
// 4. 세 숫자가 모두 같으면 (a + b + c) * (a제곱 + b제곱 + c제곱) * (a세제곱  + b세제곱 + c세제곱)을 얻는다.
function solution(a, b, c) {
  let firstDiceNumber = a;
  let secondDiceNumber = b;
  let thridDiceNumber = c;
  let result = 0;
  // 1. 세 숫자가 모두 다른경우(&& 연산자를 활용해 세 숫자가 모두 다른 조건을 만든다.)
  if (
    firstDiceNumber !== secondDiceNumber &&
    secondDiceNumber !== thridDiceNumber &&
    firstDiceNumber !== thridDiceNumber
  ) {
    result = firstDiceNumber + secondDiceNumber + thridDiceNumber;
    // 2. 두 숫자가 같고 하나는 다른 경우(or 연산자를 활용해 세 숫자 중 두 숫자는 같고 하나는 다른 조건식을 모두 충족하게 한다.)
  } else if (
    (firstDiceNumber === secondDiceNumber &&
      secondDiceNumber !== thridDiceNumber) ||
    (secondDiceNumber === c && firstDiceNumber !== thridDiceNumber) ||
    (firstDiceNumber === c && firstDiceNumber !== secondDiceNumber)
  ) {
    result =
      (firstDiceNumber + secondDiceNumber + thridDiceNumber) *
      (firstDiceNumber * firstDiceNumber +
        secondDiceNumber * secondDiceNumber +
        thridDiceNumber * thridDiceNumber);
    // 3. 세 숫자가 모두 같은 경우
  } else if (
    firstDiceNumber === secondDiceNumber &&
    secondDiceNumber === thridDiceNumber
  ) {
    result =
      (firstDiceNumber + secondDiceNumber + thridDiceNumber) *
      (firstDiceNumber * firstDiceNumber +
        secondDiceNumber * secondDiceNumber +
        thridDiceNumber * thridDiceNumber) *
      (firstDiceNumber * firstDiceNumber * firstDiceNumber +
        secondDiceNumber * secondDiceNumber * secondDiceNumber +
        thridDiceNumber * thridDiceNumber * thridDiceNumber);
  }

  return result;
}

function solution2(a, b, c) {
  // a + b + c의 합
  const sum = a + b + c;
  // 각 수의 제곱 수
  const squareSum = a ** 2 + b ** 2 + c ** 2;
  // 각 수의 세제곱수
  const cubeSum = a ** 3 + b ** 3 + c ** 3;

  // 조건에 따라 값을 할당한다.
  if (a === b && b === c) {
    // 세 숫자가 모두 같은 경우
    return sum * squareSum * cubeSum;
  }
  // 두 숫자만 같을 때
  if (a === b || b === c || a === c) {
    return sum * squareSum;
  }
  // 모두 다를 때
  return sum;
}
