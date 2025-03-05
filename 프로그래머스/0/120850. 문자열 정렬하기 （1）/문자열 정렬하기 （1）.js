// my_string 매개변수
// 안에 있는 숫자만 골라 오름차순으로 정렬한 리스트를 받기
function solution(my_string) {
  // 1. my_string을 spilt로 배열로 바꾼다
  // 2. 바꾼 배열에서 isNaN을 통해 숫자들을 true값으로 새로운 배열로 반환한다.
  // 3. map을 통해 배열을 전부 Number로 바꾸고 sort로 오름차순으로 정렬하고 값을 할당한다.
  const sortedNumbers = my_string
    .split("")
    .filter((el) => !isNaN(el))
    .map(Number)
    .sort((a, b) => a - b);

  return sortedNumbers;
}

function solution2(my_string) {
  // 위와 비슷하지만 reduce를 통해서 숫자일 때 push로 추가한다.
  const sortedNumbers = my_string
    .split("")
    .reduce((acc, cur) => {
      // !isNaN일 때 숫자를 배열로 추가한다.
      if (!isNaN(cur)) {
        // Number로 문자열을 숫자로 바꾼뒤 배열로 추가한다.
        acc.push(Number(cur));
      }
      return acc;
      // 초기 값을 빈 배열로 시작하여 숫자만 acc에 추가한다.
    }, [])
    .sort((a, b) => a - b);

  return sortedNumbers;
}
