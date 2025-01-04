// 정수배열 num_list에서
// 홀수, 짝수 조건으로 각각 이어붙인다.
// 두 숫자의 합을 정수로 반환한다.
function solution(num_list) {
    let oddSumNumber = "";
    let evenSumNumber = "";
    // 1. 홀수, 짝수 구하는 로직
    // 2. 홀수와 짝수를 구하고, 거기에 숫자를 담는다.
    for (let i = 0; i < num_list.length; i++) {
        // 짝수일 경우, 기존 숫자를 문자열로 변환 후 문자열 더하기로 숫자를 이어붙인다.
        if (num_list[i] % 2 === 0) {
          evenSumNumber = evenSumNumber.toString() + num_list[i]; 
        } else {
         oddSumNumber = oddSumNumber.toString() + num_list[i];
        }
    }
    // 2. 이어붙인 문자열들을 parseInt로 정수화하여 숫자의 합을 리턴한다.
    const sumNumbers = parseInt(evenSumNumber) + parseInt(oddSumNumber);
    return sumNumbers;
}