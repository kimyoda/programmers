// 가위 2 바위 0 보 5
// 가위바위보 순서대로 나타낸 문자열
// rsp에 저장된 가위바위보를 모두 이기는 경우 리턴
function solution(rsp) {
  // rsp를 배열로 바꾸고, 삼항연산자를 활용해 "2", "0", "5"를 이기는 모든 경우의수를 만든뒤 join으로 다시 문자열로 반환한다.
  const rspWinner = [...rsp].map(el => (el === "2" ? "0" : el === "0" ? "5" : "2")).join("");
    
  return rspWinner;
}
