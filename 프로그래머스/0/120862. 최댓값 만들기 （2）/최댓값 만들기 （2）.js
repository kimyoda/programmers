// 배열 numbers 
// numbers 원소 중 두개를 곱해 최댓값 구하기
function solution(numbers) {
    let maxProduct = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            maxProduct = Math.max(maxProduct, numbers[i] * numbers[j]);
        }
    }

    return maxProduct;
}
    
    // 두번째 풀이
    // 오름차순을 이용한 sort 풀이
//     numbers.sort((a, b) => a - b);
    
//     // 최대값 인덱스과 두번째 최대값 인덱스로 최대값 구함
//     const maxProduct = numbers[numbers.length -1] * numbers[numbers.length - 2];
    
//     // 최소값의 곱함
//     const minProduct = numbers[0] * numbers[1];
    
//     // 최대값과 최소값을 곱해 최대값을 구함(음수포함)
//     return Math.max(maxProduct, minProduct);
// }