// 부분 문자열 즉, 문자열 my_string과 target이 있다.
// target이 my_string의 부분 문자열일때
// true 1 아니면 0을 반환해라
function solution(my_string, target) {
    // 1. String.includes()를 사용해서 my_string 문자열이 target이 문자열에 포함되어 있는지 확인 후, true일때 1 아닐때 false를 반환하여 변수에 할당한다.
    const hasPartedStr = my_string.includes(target) ? 1 : 0;
    
    // 할당한 변수를 리턴하여 종료한다.
    return hasPartedStr;
}