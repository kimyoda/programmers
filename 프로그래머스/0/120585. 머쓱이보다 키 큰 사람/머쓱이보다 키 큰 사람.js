// 정수배열 array, 머쓱이 키 height 매개변수
// height보다 큰 사람 수를 구해라
function solution(array, height) {
  // filter를 통해 array 요소 중 height보다 큰 요소들을 배열로 필터링한 후, 해당 요소의 개수를 구한다.
  const tallerStudents = array.filter((el) => el > height).length;

  return tallerStudents;
}

function solution2(array, height) {
  // 변수 선언
  let tallerStudents = 0;

  array.forEach((el) => {
    if (el > height) {
      tallerStudents++;
    }
  });

  return tallerStudents;
}
