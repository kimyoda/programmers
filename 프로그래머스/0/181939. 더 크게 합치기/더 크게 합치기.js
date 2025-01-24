function solution(a, b) {
  let a_b = Number(String(a) +  String(b));
  let b_a = Number(String(b) + String(a));
  
  return Math.max(a_b, b_a);
}