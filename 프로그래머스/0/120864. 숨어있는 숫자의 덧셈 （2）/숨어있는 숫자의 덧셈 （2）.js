// 1. my_string은 소문자, 대문자, 자연수로 구성
// 2. my_string안의 자연수들의 합 리턴
// 문자열에 자연수가 없는 경우 0을 리턴
// 숫자일때는 누적하고 숫자가아닐때는 false
function solution(my_string) {
  // 1. 최종합계 변수몀, 숫자를 누적할 변수
  let totalSum = 0;
  let currentNum = "";
  // 2. 제외한 글자 말고 나머지를 자연수로 더함
  for (let char of my_string) {
    // 3. 글자가 9를 안넘는경우의 수(숫자인 경우)
    if (char >= "0" && char <= "9") {
      // 4. 누적변수에 숫자를 누적한다.
      currentNum += char;
      // 5. 변수가 문자일 경우에
    } else if (currentNum !== "") {
      // 6. 숫자가 있으면 합산
      totalSum += Number(currentNum);
      currentNum = "";
    }
  }
  
  // 7. 반복이 끝난 후에도 숫자가 있으면 더해주기
  if (currentNum !== "") {
    totalSum += Number(currentNum);
  }
    
  // 3. 더해진 숫자들을 정수로 변환 없을 시 0을 리턴해라
  return totalSum;
}