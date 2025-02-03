function solution(n) {
  // 팩토리얼 결과 저장
  let result = 1;
  // 현재 팩토리얼
  let i = 1;
  // result가 n을 넘지 않을때 i가 증가하고 result에 i를 곱한 값을 리턴한다.
  while (result <= n) {
    i++;
    result *= i;
  }
  // 초과하기 전의 i
  return i - 1;
}