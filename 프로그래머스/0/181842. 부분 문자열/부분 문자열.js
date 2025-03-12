// A가 다른 문자열 다른 문자열 b안에 속하면
// A를 b의 부분 문자열
// str1 str2 의 부분문자열이면 1
// 아니면 0을 리턴
function solution(str1, str2) {
  // includse를 사용하여 포함하는지 나타내기
  const includedStr = str2.includes(str1) ? 1 : 0;
    
  return includedStr;
}

