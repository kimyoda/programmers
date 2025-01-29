// 소문자로 바꾸고, 순서대로 정렬하기
function solution(my_string) {
  // toLowerCase로 소문자로 바꾸고, split로 배열로 만든 뒤에 sort로 유니코드로 정렬시키고 join으로 문자열을 만들어 리턴한다.
  const lowercaseSortedStr = my_string.toLowerCase().split("").sort().join("");

  return lowercaseSortedStr;
}