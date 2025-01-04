// 정수배열 num_list에서
// 홀수, 짝수 조건으로 각각 이어붙인다.
// 두 숫자의 합을 정수로 반환한다.
function solution(num_list) {
  let oddSumNumbers = 0;
  let evenSumNumbers = 0;
  // 1. 홀수, 짝수 구하는 로직
  // 2. 홀수와 짝수를 구하고, 거기에 숫자를 담는다.
  for (let i = 0; i < num_list.length; i++) {
    // 짝수일 경우, 기존 숫자를 문자열로 변환 후 문자열 더하기로 숫자를 이어붙인다.
    if (num_list[i] % 2 === 0) {
      evenSumNumbers = evenSumNumbers.toString() + num_list[i]; 
    } else {
      oddSumNumbers = oddSumNumbers.toString() + num_list[i];
    }
  }
// 2. 이어붙인 문자열들을 parseInt로 정수화하여 숫자의 합을 리턴한다.
  const sumNumbers = parseInt(evenSumNumbers) + parseInt(oddSumNumbers);
    
  return sumNumbers;
    
  // filter 활용하여 문제풀이
  // oddSumNumber와 evenSumNumber라는 짝수, 홀수 변수에 각각 num_list에서 el의 짝수, 홀수 조건에 맞는 값들을 새로운 배열로 반환한다.
//   const evenSumNumbers = num_list.filter((el) => el % 2 === 0);
//   const oddSumNumbers = num_list.filter((el, idx) => el % 2 !== 0);

//   // 새로운 정수배열인 evenSumNumbers와 oddSumNumbers를 join()으로 문자열로 변환
//   const evenSumString = evenSumNumbers.join('');
//   const oddSumString = oddSumNumbers.join('');

//   // 문자열로된 값들을 Number로 변환하여 정수로 변환하여 값 담기
//   const sumNumbers = Number(oddSumString) + Number(evenSumString);
    
//   return sumNumbers;
    // *연산자를 활용하여 이어붙이고 더하기
//     let oddSumNumbers = 0;
//     let evenSumNumbers = 0;
    
//     for (let i = 0; i < num_list.length; i++) {
//       if (num_list[i] % 2 === 0) {
//     // 짝수의 수를 구하는 로직 이후, 기존 값을 10배로 곱하고, 현재 숫자를 더해 이어붙인다. (홀수도 동일하다)
//         evenSumNumbers = (evenSumNumbers * 10) + num_list[i];
//       } else {
//          oddSumNumbers = (oddSumNumbers * 10) + num_list[i];
//       }
//     }
//     // 짝수 이어붙인 수와 홀수 이어붙인 수를 반환한다.
//     const sumNumbers = evenSumNumbers + oddSumNumbers;
    
//     return sumNumbers;
}