// 정수 num과 k가 매개변수
// num 중 k가 있으면 num의 숫자가 있는 자리수를 리턴(인덱스)
// 없으면 -1을 리턴
function solution(num, k) {
    // 1. 숫자에서 문자열로 변환
    // const strFirstNumber = String(num);
    // const strSecondNumber = String(k);     
    // 2. 문자열변환(String or toString)후 indexOf로 k의 인덱스 찾기
    const searchedNumer = String(num).indexOf(String(k));
    // 3. saerchedNumber가 -1이면 -1반환, 자리수가 있으면 1부터 시작하는 자리로 리턴한다.
    return searchedNumer === -1 ? -1 : searchedNumer +1;
}