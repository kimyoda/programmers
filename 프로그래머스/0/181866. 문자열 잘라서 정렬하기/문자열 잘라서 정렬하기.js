// myString 문자열
// "x"기준으로 문자열을 잘라내 배열로 만든
// 사전순으로 정렬한 배열
function solution(myString) {
  // 1. 문자열을 "x"를 기준으로 잘라낸다
  // 2. split로 "x"를 기준으로 잘라내고 filter로 요소가 빈문자열이 아닐 경우 제거 후 sort로 정렬하여 새로운 배열로 반환한다.
  // 3. sort는 ()활용할 시 유니코드로 정렬하기에 사전순으로 정렬할 수 있다.
  const sortedChars = myString.split("x").filter((el) => el !== "").sort();
  
  return sortedChars;
}