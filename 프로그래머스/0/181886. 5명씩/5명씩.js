// name가 5명씩 탑승가능한 놀이기구를 타기위해 줄을 서 있는 문자열 리스트
// 앞에서부터 5명씩 묶은 그룹을 포함한다. 가장 앞에 있는 사람의 이름을 포함한다.
function solution(names) {
  // names에서 5명씩 묶은 값을 새로운 배열로 반환한다.
  const groups = names.filter((_, idx) => (idx % 5 === 0));

  return groups;
}