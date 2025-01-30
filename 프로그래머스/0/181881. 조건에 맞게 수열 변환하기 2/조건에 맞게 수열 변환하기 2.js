// arr 정수 배열
// 1. (n % 2 === 0 && n >= 50) / 2
// 2. (n % 2 !== 0 && n < 50) * 2 + 1
// 3. 위 작업을 x번 반복한 결과물이 arr(x)
// 4. arr(x) = arr(x + 1)
// 5. 두 배열이 같은지에 대한 확인하는 로직이 필요하다
// 5. 가장 작은 값을 리턴? Math.min?
function solution(arr) {
  // 0. 처음 선언된 전 배열 값
  let copiedPrevArr = [...arr];
  let iterationCount  = 0;
  // 1. while문을 통해 해당 조건이 맞을때까지 반복한다
  while (true) {
    // 2. 현재 배열을 조건에 맞게 변환한다.
    const currentArr = copiedPrevArr.map((el) => {
      // 3. 조건 1 요소가 50 이상이고 짝수인 경우 2로 나눈다.
      if (el >= 50 && el % 2 === 0) {
        return el / 2;
      };
      // 4. 조건 2 요소가 50 아래고 홀수인 경우 2로 곱하고 1을 더한다.
      if (el < 50 && el % 2 !== 0) {
        return el * 2 + 1;
      };
      return el;
    });
      
    // 3. 이전 배열과 현재 배열 비교
    // every 함수를 사용하여 두 배열의 모든 요소가 동일한지 확인하다.
    const isAllSame = copiedPrevArr.every((el, idx) => el === currentArr[idx]);
    // 두 배열이 동일하면 더 이상 변하지 않기에 반복을 종료한다.
    if (isAllSame) {
      break;
    }
     
    // 4. 현재 배열을 이전 배열로 저장한다.
    copiedPrevArr = currentArr;
    // 5. 반복 횟수를 저장한다.
    iterationCount  += 1;
  }
  return iterationCount ;
}