// v가 or연산 반대 v가 and연산
// 저걸 그냥 코드로 표현해서 풀기
function solution(x1, x2, x3, x4) {
    // 삼항연산자로 결과값에 따라 true인지 false인지 반환하기 -> 논리연산자 매개변수로 생략
    const isConditionLogic = ((x1 || x2) && (x3 || x4));
    return isConditionLogic;
}