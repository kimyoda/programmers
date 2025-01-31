// myString, pat이 있다
// myString 부분 문자열 pat으로 끝나는 긴 부분 문자열 리턴
function solution(myString, pat) {
  // myString에서 pat의 길이와 pat이 끝나는 부분을 구하기
  // pat으로 끝나는 가장 마지막 인덱스값
  const lastIndex = myString.lastIndexOf(pat);
  // myString에서 pat으로 끝나는 가장 긴 부분 문자열을 추출한다.
  const longestEndStr = myString.slice(0, lastIndex + pat.length);

  return longestEndStr;
}