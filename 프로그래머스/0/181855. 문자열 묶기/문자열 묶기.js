// strArr 문자열 배열
// 길이가 같은 문자열끼리 그룹
// 가장 개수가 많은 그룹의 크기
function solution(strArr) {
  // 0. 변수선언
  let groupCount = {};  
  let maxCount = 0; 
  // 1. strArr 문자열의 길이를 map으로 구한다.    
  const strLengths = strArr.map(el => el.length);
  // 2. strLengths 문자열 길이에서 순회하여 그룹으로 묶는다
  strLengths.forEach(el => {
    // 3. lengthCount객체에 el을 넣고 el이 0이거나 +1일경우를 담는다.    
    groupCount[el] = (groupCount[el] || 0) + 1;
      if (groupCount[el] > maxCount) {
        // 4. 그룹의 최대값
        maxCount = groupCount[el];
      }  
  });
  // 2. 조건이 같을 때 가장 개수가 많은 그룹의 크기 구하기
  return maxCount;
}