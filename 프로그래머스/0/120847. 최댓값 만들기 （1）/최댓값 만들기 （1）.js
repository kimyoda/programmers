function solution(numbers) {
  // 배열을 오름차순으로 정렬
  const sortedNumbers = numbers.sort((a, b) => a - b)
  
  // 배열의 두 값을 곱하여 최댓값
  const maxPairProduct = sortedNumbers[sortedNumbers.length - 1] * sortedNumbers[sortedNumbers.length - 2];
  
  return maxPairProduct;
}

