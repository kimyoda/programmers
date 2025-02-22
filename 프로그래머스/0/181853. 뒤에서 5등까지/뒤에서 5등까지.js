// 정수배열 num_list가 있다.
// num_list에 가장 작은 5개의 수를 오름차순으로 담은걸 리턴해라.
function solution(num_list) {
  // 1. num_list의 가장 작은 개수대로 정렬하기
  const copiedNumList = [...num_list];

  // 2. sort로 정렬 한뒤 slice로 5개가 리턴하도록하기
  const sortedNumbers = copiedNumList.sort((a, b) => a - b).slice(0, 5);
    
  return sortedNumbers;
}