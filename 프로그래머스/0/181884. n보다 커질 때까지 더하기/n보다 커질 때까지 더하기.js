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

function solution2(number, n) {
  let sumsElement = 0;

  numbers.forEach((el) => {
    if (sumsElement > n) {
      return;
    }
    sumsElement += el;
  });
  return sumsElement;
}
