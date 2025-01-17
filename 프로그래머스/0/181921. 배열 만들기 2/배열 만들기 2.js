// 정수 l, r이 있다.
// l이상 r이하의 정수 중 숫자 0, 5로만 이루어진 정수
// 오름차순으로 저장한 배열
// 리턴하는데 정수가 없으면 -1 리턴
function solution(l, r) {
    const results = [];
    const firstArrNumber = l;
    const secondArrNumber = r;
    // 1. l이상 r이하 정수 중 0, 5로 이루어진 반복문
    for (let i = firstArrNumber; i <= secondArrNumber; i++) {
      // 2. i를 num, 값이 맞으면 true를 선언함.
      let num = i;
      let isValued = true;
      
      // 자릿수가 0또는 5인지 확인
      while (num > 0) {
        // 마지막 자릿수  
        const lastNumber = num % 10;
        if (lastNumber !== 0 && lastNumber !== 5) {
          // 조건에 맞지않으면 false  
          isValued = false;    
        }
        // 소수점 이하 제거함수를 활용하여 마지막 자릿수를 제거한다.
        num = Math.floor(num / 10);
      }
      // 조건에 맞는 숫자만 push로 배열에 추가한다.
      if (isValued) {
          results.push(i);
      }  
    }
    // 배열이 비어 있으면 [-1]을 반환한다.
    return results.length > 0 ? results : [-1];
}