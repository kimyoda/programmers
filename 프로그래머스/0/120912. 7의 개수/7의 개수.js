// 1. 배열 array
// 2. 배열에서 7이 총 몇개 있는 지 리턴
function solution(array) {
  // 1. map으로 각 요소를 문자열로 변환하고 join으로 문자열을 합친다. 합쳐진 문자열을 split로 분리한다.
  // 2. 그걸 filter를 통해 7이있을때 리턴하도록 하고 length로 각 반환하여 7의 개수를 계산한다.
  const sevenArr = array.map(el => String(el)).join("").split("").filter((char) => char === "7").length;
    
  return sevenArr;
}