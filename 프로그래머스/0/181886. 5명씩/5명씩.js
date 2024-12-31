// 1. 5명씩 탑승가능한 놀이기구
// 2. 이름이 담긴 문자열 리스트 names, 앞에서부터 5명씩 묶은 그룹
// 3. 가장 앞에 서있는 사람들의 이름을 담은 리스트
// 5명이 되지 않더라도, 앞에 있는 사람의 이름을 포함한다.
function solution(names) {
    const groups = [];
    for (let i = 0; i < names.length; i += 5) {
      groups.push(names[i]);
    }
    return groups;
}