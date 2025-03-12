// A가 다른 문자열 다른 문자열 b안에 속하면
// A를 b의 부분 문자열
// str1 str2 의 부분문자열이면 1
// 아니면 0을 리턴
function solution(str1, str2) {
  // includse를 사용하여 포함하는지 나타내기
  // str2안에 str1이 포함되어 있으면 true 아니면 false
  // true면 1 아니면 false
  const includedStr = str2.includes(str1) ? 1 : 0;

  return includedStr;
}

function solution2(str1, str2) {
  // includes말고 filter와 slice를 활용하여
  const copiedStr = [...str2];
  // 현재 위치에서 str1.length 길이만큼 자른 부분 문자ㅓ열에서 str1과 일치하는 부분만 남기고 배열의 길이가 0보다 크면 1 아니면 0으로 반환
  return copiedStr.filter(
    (_, idx) => str2.slice(idx, idx + str1.length) === str1
  ).length > 0
    ? 1
    : 0;
}
