// 중앙값은 크기의 순서대로 정렬했을 때 중앙에 위치하는 값
// 정수 array 가 매개변수일때 중앙값을 리턴해라.
function solution(array) {
  const arrayLength = array.length;
  const middleIndex = Math.floor(arrayLength / 2); 

  array.sort((a, b) => a - b);

  const middleElement = array[middleIndex];

  return middleElement;
}

