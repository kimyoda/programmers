// num_list가 있을 때 가장작은 5개의 수를 제외한 오름차순으로 담기
function solution(num_list) {
  // 원본배열 담기
  const copiedNumList = [...num_list];
  // sort를 활용하여 copiedNumList의 값을 오름차순으로 배열을 반환한다. 
  copiedNumList.sort((a, b) => a - b);
  
  // copiedNumList중 slice를 활용하여 5번째 인덱스 값이 있는 새로운 배열을 할당하기
  const remainedNumbers = copiedNumList.slice(5);
  
  return remainedNumbers;
}
