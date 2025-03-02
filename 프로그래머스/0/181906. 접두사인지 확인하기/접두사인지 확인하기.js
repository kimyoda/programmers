// 1. 접두사는 특정 인덱스까지의 문자열
// 2. my_string의 접두사 is_prefix면
// 3. true일때 1 아니면 false로 리턴한다.
function solution(my_string, is_prefix) {
  // 1. my_string의 is_prefix의 값이 true인지 false인 지 구하고 그 true면 1 아니면 0을 담아 변수 선언에 값을 할당한다.
  // 2. startsWith라는 메서드를 통해 문자열의 문자로 시작하는 확인 후 결과를 true 혹은 false로 반환한다.
  // 3. +단항연산자를 활용해 1과 0을 리턴한다.
  const hasPrefix = my_string.startsWith(is_prefix);

  return +hasPrefix;
}

function solution2(my_string, is_prefix) {
  // 1. slice를 활용하여 0번 인덱스부터 is_prefix의 길이만큼 추출 하여 is_prefix 1이거나 0일때 값을 할당한다.
  const prefixString =
    my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;

  return prefixString;
}
