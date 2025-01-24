function solution(rsp) {
  const rspWinner = [...rsp].map(el => (el === "2" ? "0" : el === "0" ? "5" : "2")).join("");
  return rspWinner;
}
