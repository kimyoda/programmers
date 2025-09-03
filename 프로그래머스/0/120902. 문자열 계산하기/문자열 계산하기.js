// 문자열 수식 계산 문제: '+', '-'만 사용
// 매개변수 my_string: 공백으로 구분된 수식 문자열. 예) "3 + 4 - 2"
// 반환값: 수식을 왼쪽에서 오른쪽 순서로 차례대로 계산한 결과
function solution(my_string) {
  // 1) 공백 기준으로 숫자/연산자 토큰을 분리한다.
  const arr = my_string.split(" ");

  // 2) reduce로 왼쪽→오른쪽 순차 계산을 수행한다.
  //    - 초기값: 첫 번째 숫자(Number(arr[0]))
  //    - 순회 중 현재 토큰(cur)이 '+' 또는 '-'이면 바로 다음 숫자(arr[idx + 1])를 사용해 누적(acc)을 갱신한다.
  const result = arr.reduce((acc, cur, idx) => {
    // acc: 지금까지 누적된 계산 결과
    let newResult = acc;
    // cur이 연산자일 때만 다음 숫자를 이용해 결과를 갱신한다.
    if (cur === "+") {
      currentTotal = acc + Number(arr[idx + 1]);
    } else if (cur === "-") {
      currentTotal = acc - Number(arr[idx + 1]);
    }
    // 숫자 토큰일 경우에는 누적값을 그대로 유지한다.
    return currentTotal;
    // 초기값은 첫 번째 숫자(Number(arr[0]))
  }, Number(arr[0]));

  return result;
}

function solution2(my_string) {
  // 문자열로 된 수식을 "새로운 함수 스코프"에서 평가하여 결과를 반환한다.
  // 동작 방식:
  //  - 템플릿 리터럴로 "return {수식}" 형태의 코드 문자열을 만든다.
  //      예) "3 + 4 - 2" → "return 3 + 4 - 2"
  //  - Function("return ...")으로 함수를 동적으로 생성하고 즉시 실행한다.
  //      즉, (function() { return 3 + 4 - 2; })() 와 유사한 효과
  //
  // eval과의 차이/안전성 요점:
  //  - eval: 현재(로컬) 스코프에서 실행되어 주변 변수/환경에 직접 접근 가능
  //  - Function: 항상 "새로운 함수 스코프"에서 실행되어 로컬 스코프를 침범하지 않음
  //    (영향 범위가 비교적 제한적)
  //  - 단, 둘 다 "임의 코드 실행"이라는 점은 동일하므로 신뢰할 수 없는 입력에는 절대 사용 금지
  //
  // 사용 전제:
  //  - 문제처럼 검증된 단순 산술 수식(+, -) 문자열에만 사용한다.
  return Function(`return ${my_string}`)();
}
