// 정수 배열 arr의 값이 50보다 크거나 짝수면 2로 나눈다.
// 50보다 작은 홀수면 2를 곱한다.
// 그 결과인 정수 배열을 리턴한다.
function solution(arr) {
    const transformedSequence = [];
    // 반복문을 돌려 arr[i]가 
    for (let i = 0; i < arr.length; i++) {
      // 50보다 크거나 같은 짝수면 2로 나누고
      if (arr[i] >= 50 && arr[i] % 2 === 0) {
        transformedSequence.push(arr[i] / 2);
      // 50보다 작거나 홀수면 2를 곱한다.
      } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
        transformedSequence.push(arr[i] * 2);
      } else {
      // 그 외에 값은 추가한다.
        transformedSequence.push(arr[i]);
      }
    }
    
    return transformedSequence;
}