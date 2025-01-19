// 1. a = 0, b = 1, c =2 j = 9
// 23살은 cd, 51살은 fb로 표현
// age가 있을때 PROGRMMER-962 나이를 리턴
function solution(age) {
    // 1. 숫자 age를 문자열로 바꾼다.
    const strAge = String(age);
    // 2. 숫자 0~9를 알파벳 a~j로 변환규칙추가
    const changedStr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    let result = '';
    
    // 3. i가 starAge의 길이까지 반복하여 증가하기
    for (let i = 0; i < strAge.length; i++) {
      // 4. 숫자로 변환 후에 매핑해서 누적시켜 변수에 할당한다. 
      result += changedStr[Number(strAge[i])];
    }
    // 3. PROGRMMER-962식 구하여 리턴한다.
    return result;
}