// before, after 매개변수
//  before의 순서를 바꿔서 after면 1 아니면 0 리턴
function solution(before, after) {
  // 1. before와 after를 정렬시켜 같으면 1 아니면 0이 주요다.
  const sortedBeforeStr = before.split("").sort().join("");
  const sortedAfterStr = after.split("").sort().join("");
  // 2. 바꾼 변수가 after와 같으면 1 아니면 0
  return sortedBeforeStr === sortedAfterStr ? 1 : 0; 
}