function solution(a, b) {
  let a_b = Number(String(a) + String(b));
  let b_a = Number(String(b) + String(a));

  return Math.max(a_b, b_a);
}

function solution2(a, b) {
  // 템플릿 리터럴 사용하여 구하기
  const a_b = Number(`${a}${b}`);
  const b_a = Number(`${b}${a}`);
  return Math.max(a_b, b_a);
}
