// 중앙값은 크기의 순서대로 정렬했을 때 중앙에 위치하는 값
// 정수 array 가 매개변수일때 중앙값을 리턴해라.
function solution(array) {
  // 1. spread연산자를 활용하여 오름차순으로 정렬.
  const sortedArr = [...array].sort((a, b) => a - b);
  // 2. 정렬된 배열에서 중앙 값의 인덱스를 구하고, 요소를 가져온다.
  const middleValue = sortedArr[Math.floor(sortedArr.length / 2)];

  return middleValue;
}

function solution(array) {
  // 길이를 변수명으로 뺀다
  const arrayLength = array.length;
  // 중간값을 변수명으로 뺸다.
  const middleIndex = Math.floor(arrayLength / 2);
  // sort로 array을 정렬시킨다(전개구문)
  const sortedArr = array.sort((a, b) => a - b);
  // 중앙값
  const middleValue = sortedArr[middleIndex];
  
  return middleValue;
};

