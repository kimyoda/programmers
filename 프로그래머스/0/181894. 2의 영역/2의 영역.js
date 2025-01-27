// 정수 배열 arr
// 배열 안의 2가 포함된 가장 작은 배열을 리턴(첫번째 그리고 마지막)
// 2가 없으면 -1을 리턴
function solution(arr) {
  // 1. 첫번째 2의 위치
  // 배열의 첫 번째로 등장하는 2의 인덱스 찾기
  const firstIndex = arr.indexOf(2);
    
  // 2. 마지막 2의 위치
  // 배열의 마지막으로 등장하는 2의 인덱스 찾기
  const lastIndex = arr.lastIndexOf(2);
    
  // 3. 첫번째 2부터 마지막2까지의 배열 추출 및 2가 없으면 -1을 리턴
  // slice로 firstIndex, lastIndex 부분 배열 추출
  const twoSubArray = arr.slice(firstIndex, lastIndex + 1);
    
  return firstIndex === -1 ? [-1] : twoSubArray;
}