// // 정수 배열 arr의 값이 50보다 크거나 짝수면 2로 나눈다.
// // 50보다 작은 홀수면 2를 곱한다.
// // 그 결과인 정수 배열을 리턴한다.
// function solution(arr) {
//     const transformedSequence = [];
//     // 반복문을 돌려 arr[i]가 
//     for (let i = 0; i < arr.length; i++) {
//       const value = arr[i];

//       // 50보다 크거나 같은 짝수면 2로 나누고
//       if (value >= 50 && value % 2 === 0) {
//         transformedSequence.push(value / 2);
//       // 50보다 작거나 홀수면 2를 곱한다.
//       } else if (value < 50 && value % 2 !== 0) {
//         transformedSequence.push(value * 2);
//       } else {
//       // 그 외에 값은 추가한다.
//         transformedSequence.push(value);
//       }
//     }
    
//     return transformedSequence;
// }

function solution(arr) {
 const transformedValue = arr.map((value) => {
  if (value >= 50 && value % 2 === 0) {
    return value / 2; // 50 이상 짝수 일때 나누기
  } else if (value < 50 && value % 2 !== 0) {
    return value * 2; // 50 이하 홀수 일때 곱하기
  } 
    return value; // 그 외의 값
 });
  return transformedValue; // 최종 변환값 반환
}