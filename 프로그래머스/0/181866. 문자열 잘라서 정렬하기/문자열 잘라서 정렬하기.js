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

function solution2(myString) {
  // 변수할당
  const result = [];
  let temp = "";

  // for문 활용
  for (let i = 0; i < myString.length; i++) {
    // x일때
    if (myString[i] === "x") {
      // 빈 문자열을 제외하고 추가한다.
      if (temp !== "") {
        result.push(temp);
        temp = "";
      } 
      // 나머지를 계속 이어 붙인다.
    } else {
      temp += myString[i];
    }
  }
  // 마지막에 남은 문자열을 추가한다.
  if (temp !== "") {
    result.push(temp);
  }

  return result.sort();
}
