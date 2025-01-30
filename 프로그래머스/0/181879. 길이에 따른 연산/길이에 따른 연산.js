// num_list가 있을 때 11 이상이면 리스트에 있는 모든 원소의 합
// 10이하면 모든 원소의 곱을 리턴
function solution(num_list) {
  const numListLength = num_list.length;
  // 1. 11개 이상이면 합
  const isSum = numListLength >= 11;
  // 2. 초기값 설정
  const initalValue = isSum ? 0 : 1;
  
  // 3. reduce 메서드를 통해 isSum이면 합 아니면 곱을 초기값을 통해 구한다.
  const arrSumOrProduct = num_list.reduce((acc, cur) => isSum ? acc + cur : acc * cur, initalValue);
    
  return arrSumOrProduct;
}