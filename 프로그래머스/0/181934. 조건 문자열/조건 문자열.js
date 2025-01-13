// 문자열 ineq, eq가 있다.
// ineq는 > < 중 하나, eq는 = ! 중 하나이다.
// 정수 n, m이 있을때 ineq와 eq의 조건에 맞으면 1 아니면 0
function solution(ineq, eq, n, m) {
  // 템플릿 리터럴을 활용하여 문자열을 하나로 합친 후 변수에 할당.
  const condition = `${ineq}${eq}`;
  // 조건에 맞는 비교 연산을 수행하고 결과를 반환
  switch (condition) {
    // 첫번째 조건 ">="에 따라 n이 m보다 크거나 같으면 1 아니면 0
    case ">=":
      return n >= m ? 1 : 0;
    // 두번째 조건 "<="에 따라 n이 m 보다 작거나 같으면 1 아니면 0
    case "<=":
      return n <= m ? 1 : 0;
    // 세번째 조건 ">!"에 따라 n 이 m보다 크면 1 아니면 0
    case ">!":
      return n > m ? 1 : 0;
    // 네번째 조건 "<!"에 따라 n이 m보다 작을경우 1 아니면 0
    case "<!":
      return n < m ? 1 : 0;
  }
}
