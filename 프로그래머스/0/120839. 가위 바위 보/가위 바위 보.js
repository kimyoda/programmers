// 가위 2 바위 0 보 5
// 가위바위보 순서대로 나타낸 문자열
// rsp에 저장된 가위바위보를 모두 이기는 경우 리턴
function solution(rsp) {
  // rsp를 배열로 바꾸고, 삼항연산자를 활용해 "2", "0", "5"를 이기는 모든 경우의수를 만든뒤 join으로 다시 문자열로 반환한다.
  const rspWinner = [...rsp]
    .map((el) => (el === "2" ? "0" : el === "0" ? "5" : "2"))
    .join("");

  return rspWinner;
}

function solution2(rsp) {
  // for문을 통해 각 문자열 길이만큼 순회하여 값을 할당한다.
  let rspWinner = "";
  // 1. rsp.length 길이 만큼 순회하여 각 조건에 맞는 값을 할당한다.
  for (let i = 0; i < rsp.length; i++) {
    // 1. 가위와 같을 때 바위일때 값 증가
    if (rsp[i] === "2") {
      // 가위2가 바위0로 이길때 증가
      rspWinner += "0";
    } else if (rsp[i] === "0") {
      // 바위일때 보5로 이긴다.
      rspWinner += "5";
    } else {
      rspWinner += "2";
    }
  }

  return rspWinner;
}
