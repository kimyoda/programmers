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

function solution2(num_list) {
  // 1. 짝수번째 원소들의 합을 filter와, reduce로 구하기
  // 2. filter로 짝수번째 원소값만 남긴 뒤 합을 구하기
  const sumEvenNumbers = num_list
    .filter((_, idx) => idx % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
  // 3. 홀수번째 원소들의 원소값만 남기고 합을 구하기
  const sumOddNumbers = num_list
    .filter((_, idx) => idx % 2 !== 0)
    .reduce((acc, cur) => acc + cur, 0);

  return Math.max(sumEvenNumbers, sumOddNumbers);
}
