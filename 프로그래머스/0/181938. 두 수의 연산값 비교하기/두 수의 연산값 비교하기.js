function solution(a, b) {
  // 처음에 a 연사 b를 문자열로 바꾼걸 더해서 Number로 바꿔 변수에 할당한다.
  const sumNumber = Number(String(a) + String(b));
  // 2 * a * b를 변수로 할당한다.
  const product = 2 * a * b;
  // sumNumber가 product보다 크면 sumNumber 아니면 product이다.
  if (sumNumber > product) {
    return sumNumber;
  } else {
    return product;
  }
}

function solution2(a, b) {
  const sumNumber = Number(string(a) + string(b));

  const product = 2 * a * b;

  return sumNumber > product ? sumNumber : product;
}
