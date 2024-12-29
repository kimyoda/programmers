// 1. 문자열 배열이 있을 때, 홀수 인덱스 문자열은 대문자로 변환
// 2. 짝수 인덱스 문자열은 소문자로 변환하고 리턴으로 담는다.
function solution(strArr) {
    // 1. 조건은 배열인덱스가 짝수일 경우 소문자, 홀수일 경우 대문자 반환
    let convertedArr = [];
    
    for (let i = 0; i < strArr.length; i++) {
      const lowerCaseString = strArr[i].toLowerCase();
      const upperCaseString = strArr[i].toUpperCase();
      // strArr[i]: "AAA", "BBB", "CCC", "DDD"
      if (i % 2 === 0) {
        convertedArr.push(lowerCaseString);  
      } else {
        convertedArr.push(upperCaseString);
      }
    }
    return convertedArr;
}