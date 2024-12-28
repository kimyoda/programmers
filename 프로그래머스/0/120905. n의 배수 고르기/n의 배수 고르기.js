// 1. 정수 n과 정수 배열 numlist가 주어진다.
// 2. n의 배수만 필터링하여 새로운 배열 생성한다.
function solution(n, numlist) {
    // 배열을 뽑아내는데 적합한 매서드 중 filter가 생각나 찾아보고 적용노력   
    // n의 배수가 아닌 수들을 표현한 변수명, 이후 numlist에서 filter적용     
    const filteredValidNumbers = numlist.filter(number => number % n === 0);
    // 기존 result에 push하여 배열에 추가(배열의 요소를 개별적으로 추가, 스프레드 연산자)
    return filteredValidNumbers;
}
