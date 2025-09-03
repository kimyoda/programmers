// 중복되는 수를 제거한다
// 서로다른 수를 저장한다.
// 지금까지 나온적 없는 수를 배열 맨뒤에 추가한다.
function solution(arr, k) {
  // 1. Set을 이용해 중복을 제거한 배열을 만든다.(전개 구문 연산자 활용) 
  const copiedArr = [...new Set(arr)];
  // 2. slice를 활용해 앞에서부터 0번쨰부터 k개의 원소까지 잘라낸다.
  let result = copiedArr.slice(0, k);
  // 3. k보다 작으면 나머지 값을 -1로 추가한다.  
  while (result.length < k) {
    result.push(-1);
  };
  // 4. 최종 결과를 반환한다.
  return result;
}