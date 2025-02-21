// 문자열 my_string, 정수 num1, num2
// my_string 인덱스 num1 과 num2 문자를 바꾼 문자열
function solution(my_string, num1, num2) {
  // 문자열을 배열로 만들기(전개구문)
  const copiedArrStr = [...my_string];
    
  // 배열로 만든 값에 num1, num2 교환하기
  const changedStr = copiedArrStr[num1]; // "e"
  // copiedArrStr[num1]에 copiedArrStr[num2]의 "l"를 할당한다.
  copiedArrStr[num1] = copiedArrStr[num2];
  // copiedArrStr[num2]에 "e"을 할당한다.
  copiedArrStr[num2] = changedStr;
    
  // join으로 배열을 문자열로 다시 리턴한다
  const result = copiedArrStr.join('');
    
  return result;
}