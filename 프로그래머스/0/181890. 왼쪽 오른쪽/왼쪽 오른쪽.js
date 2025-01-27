// 문자열 리스트 str_list "u", "d", "l", "r"
// str_list 중 "i"과 "r"중 먼저나오는건 "i"면 왼쪽에 있는 문자열들을 순서대로 담은 리스트
// 먼저오는 "r"이면 오른쪽에 있는 문자열을 순서대로 담은 리스트 리턴
// "l"나 "r"이 없으면 빈 리스트
function solution(str_list) {  
  // 1. l와 r의 인덱스를 확인한다
  const leftCheckedIndex = str_list.indexOf("l");
  const rightCheckedIndex = str_list.indexOf("r");

  // 2. 각가에 맞는 조건을 넣기
  // 3. l와 r 모두 없는 경우 빈배열 리턴
  if (leftCheckedIndex === -1 && rightCheckedIndex === -1) {
    return [];
  }
  // l가 먼저 나오는 경우
  if (leftCheckedIndex !== -1 && (rightCheckedIndex === -1 || leftCheckedIndex < rightCheckedIndex)) {
    return str_list.slice(0, leftCheckedIndex);
  }
    // r이 먼저 나오는 경우
    return str_list.slice(rightCheckedIndex + 1);
}