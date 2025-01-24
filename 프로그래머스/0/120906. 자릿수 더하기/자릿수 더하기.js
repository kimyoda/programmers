function solution(n) {
  // n을 Stirng으로 변환 후 split로 배열로 만든 뒤 reduce로 acc + cur값을 전부 더한다(이때 Number로 변환후 더한다).
  const digitSum = String(n).split("").reduce((acc, cur) => acc + Number(cur), 0);
  
  return digitSum;
}