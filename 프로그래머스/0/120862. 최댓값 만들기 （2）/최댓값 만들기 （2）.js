// 배열 numbers 
// numbers 원소 중 두개를 곱해 최댓값 구하기
function solution(numbers) {
//     let maxNumber = 0;
//     let maxFirstNumber = 0;
//     let maxSecondNumber = 0;
//     let negativeMaxFirstNumber = -1;
//     let negativeMaxSecondNumber = -1;
    
//     // 1. 가장 큰 값을 넣는다.(양수, 음수 고려)
//     for (let i = 0; i < numbers.length; i++) {
//       // 반복된 숫자가 maxFirstNumber보다 크면, 기존 maxFirstNumber maxSecondNumber로 옮기고, maxFirstNumber에 현재 숫자를 할당한다.
//       if (numbers[i] > maxFirstNumber) {
//         maxSecondNumber = maxFirstNumber;
//         maxFirstNumber = numbers[i];
//    // 2. 반복된 숫자 maxFirstNumber보다 작지만 maxSecondNumber보다 크면 갱신한다.
//       } else if (numbers[i] > maxSecondNumber) {
//           maxSecondNumber = numbers[i];
//       } 
//       // 위와 같은 방법으로 음수를 구하기(음수는 절대값이 클수록 작은 값이므로 반대로 처리)
//       if (numbers[i] < negativeMaxFirstNumber) {
//         negativeMaxSecondNumber = negativeMaxFirstNumber;
//         negativeMaxFirstNumber = numbers[i];
//       } else if (numbers[i] < negativeMaxSecondNumber) {
//           negativeMaxSecondNumber = numbers[i];
//       }
//     }
//     // 3. 찾은 두값(양수 최대값, 음수 최소값 을 곱하여 리턴한다.
//     maxNumber = Math.max(maxFirstNumber * maxSecondNumber, negativeMaxFirstNumber * negativeMaxSecondNumber);
//     return maxNumber;
    
    // 두번째 풀이
    // 오름차순을 이용한 sort 풀이
    numbers.sort((a, b) => a - b);
    
    // 최대값 인덱스과 두번째 최대값 인덱스로 최대값 구함
    const maxProduct = numbers[numbers.length -1] * numbers[numbers.length - 2];
    
    // 최소값의 곱함
    const minProduct = numbers[0] * numbers[1];
    
    // 최대값과 최소값을 곱해 최대값을 구함(음수포함)
    return Math.max(maxProduct, minProduct)
}