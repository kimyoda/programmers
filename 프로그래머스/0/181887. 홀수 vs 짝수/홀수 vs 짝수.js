function solution(num_list) {
  // 1. 값을 담은 변수 선언
  let sumOddNumbers = 0;
  let sumEvenNumbers = 0;
  let sumNumbers = 0;
  // 2. forEach를 통해 el이 홀수일때, 짝수일 때 값을 담기  
  num_list.forEach((el, idx) => {
    // 짝수번째 원소들의 합
    if (idx % 2 === 0) {
      sumEvenNumbers += el;
    } else {
      // 홀수번째 들의 합
      sumOddNumbers += el;
    }
  });
  // forEach이후 max값을 결정한다.
  sumNumbers = Math.max(sumEvenNumbers, sumOddNumbers);

  return sumNumbers;
}