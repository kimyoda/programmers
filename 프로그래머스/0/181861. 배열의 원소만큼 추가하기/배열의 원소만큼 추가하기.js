// 빈 배열 X
// 정수 배열 arr
// arr의 앞에서부터 차례대로 원소를 a를 a번만큼 추가반복을 리턴
function solution(arr) {
  // 1. 변수 선언
  const emptyArray = [];
    
  // 2. forEach를 활용하여 i가 a번전까지 반복하여 순회하여 값을 추가
  const arrayAddedA = arr.forEach(el => {
   for (let i = 0; i < el; i++) {
     emptyArray.push(el); 
   }
  });
  return emptyArray;
}

function solution2(arr) {
  // reduce를 통해 전개구문으로 acc의 값을 더하고 cur을 배열로 cur을 cur번 추가한다.
  // 초기값은 빈배열이다.
  const sumArray = arr.reduce((acc, cur) => [...acc, ...Array(cur).fill(cur)], []);

  return sumArray;
}

