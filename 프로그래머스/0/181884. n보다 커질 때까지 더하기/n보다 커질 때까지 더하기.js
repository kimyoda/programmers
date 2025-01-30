function solution(numbers, n) {
  const numbersLength = numbers.length;
  let sumsElement = 0; // 누적 합을 저장할 변수 초기화

  for (let i = 0; i < numbersLength; i++) {
    sumsElement += numbers[i]; 

    if (sumsElement > n) {
      return sumsElement; 
    }
  }

  return sumsElement; 
}