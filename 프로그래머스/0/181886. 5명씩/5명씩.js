// name가 5명씩 탑승가능한 놀이기구를 타기위해 줄을 서 있는 문자열 리스트
// 앞에서부터 5명씩 묶은 그룹을 포함한다. 가장 앞에 있는 사람의 이름을 포함한다.
function solution(names) {
  // names에서 5명씩 묶은 값을 새로운 배열로 반환한다.
  const groups = names.filter((_, idx) => idx % 5 === 0);

  return groups;
}

function solution2(names) {
  // 값을 할당할 변수
  let groups = [];

  // for문을 통해 5명씩 순회하여 추가하기
  for (let i = 0; i < names.length; i += 5) {
    groups.push(names[i]);
  }

  return groups;
}
