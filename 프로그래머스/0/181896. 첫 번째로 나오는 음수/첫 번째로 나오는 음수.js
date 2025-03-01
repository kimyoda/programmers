// num_list 정수배열, 첫번째 음수의 인덱스를 return한다
// 이때 음수가 없으면 -1을 리턴한다.
function solution(num_list) {
  // num_list에서 음수가 나오는 인덱스를 리턴
  // 없으면 -1 리턴
  const firstNegativeNumber = num_list.findIndex((el) => el < 0);

  return firstNegativeNumber;
}

function solution2(num_list) {
  // 초기 값을 음수로 설정한다.(음수가 없을 경우)
  let firstNegativeNumber = -1;
  // 음수를 찾으면 인덱스를 저장한다.
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      firstNegativeNumber = i;
      // 첫 번째 음수를 찾으면 종료한다.
      break;
    }
  }
  return firstNegativeNumber;
}
