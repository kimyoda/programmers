// 정수배열 num_list, 정수 n
// 첫번째 원소부터 n번째 원소까지 값 구하기
function solution(num_list, n) {
  // slice를 통해 첫 번째 원소부터 n까지 잘라서 할당하기
  const slicedArr = num_list.slice(0, n);

  return slicedArr;
}

function solution2(num_list, n) {
  // 값을 할당할 변수.
  let slicedArr = [];

  num_list.some((el, idx) => {
    // idx가 n보다 크기전까지 반복한다
    if (idx < n) {
      slicedArr.push(el);
      return false;
    }
    // n개를 채우면 종료한다.
    return true;
  });
  return slicedArr;
}
