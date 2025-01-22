// 문자열 배열 inStrs, 정수 k, s, l
// intStrs의 원소는 숫자로 ["1", "2" ...]
// intStrs[] 원소마다 s번 인덱스에 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환
// 변환한 정수값이 k보다 큰 값들을 담은 배열을 리턴

function solution(intStrs, k, s, l) {
  // 1. inStrs의 원소가 s번 부터 시작해서 l짜리 부분 문자열을 잘라내고 정수로 변환
  const filteredStrArr = intStrs
    .filter(el => {
    // 2. 부분 문자열을 잘라 정수로 변환하고 num이 k보다 큰 값들을 반환한다.
    const num = Number(el.slice(s, s + l));
    return num > k;
    // 3. 필터링된 문자열을 정수로 변환
    }).
    map(el => Number(el.slice(s, s + l)));

  return filteredStrArr;
}