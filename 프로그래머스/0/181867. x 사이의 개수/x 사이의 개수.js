// myString이 있다.
// 1. myString을 문자 "x"를 기준으로 나눌때,
// 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return해라.
function solution(myString) {
    // 1. myString을 x를 기준으로 나눠진 배열을 반환한다.
    // 2. map을 활용해 나눠진 문자열 각각의 길이를 새로운 배열로 반환한다. 
    // 3. 메소드 체이닝을 split()로 문자열을 나누고, 배열에 대해 map()을 호출해 요소의 길이를 새로운 배열로 반환하는 과정을 한번에 처리한다.
    const delimitedStr = myString.split('x').map(el => el.length);

    return delimitedStr;
}