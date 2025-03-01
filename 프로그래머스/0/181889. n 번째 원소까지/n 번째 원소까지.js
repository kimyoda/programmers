// 정수배열 num_list, 정수 n
// 첫번째 원소부터 n번째 원소까지 값 구하기
function solution(num_list, n) {
  // slice를 통해 첫 번째 원소부터 n까지 잘라서 할당하기
  const slicedArr = num_list.slice(0, n);
    
  return slicedArr;
}