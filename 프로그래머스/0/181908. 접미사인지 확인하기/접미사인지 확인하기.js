// 접미사는 문자열의 끝에서 시작한다.
// my_string에서 is_suffix가 접미사면 1 아니면 0을 리턴
function solution(my_string, is_suffix) {
    // 접두사와 반대로 끝에서부터 시작하여 문자열을 담는 방식으로 접근
    // slice의 음수(문자열 끝부분)부터 is_suffix의 길이만큼 값을 추출하여 is_suffix의 조건과 비교하여 새로운 문자열로 반환한다.
    // -is_suffix.length는 문자열의 끝에서 is_suffix의 조건을 비교하여 true면 1 false면 0을 반환하는 새로운 문자열 담는다.
//     const hasSuffix = my_string.slice(-is_suffix.length) === is_suffix ? 1 : 0;
    
//     return hasSuffix;
    // startWith의 반대 메서드이다. 문자열의 문자로 끝나는지 여부를 결정하여 true또는 false를 반환한다.
    // my_stirng이 is_suffix로 끝나는지 담는데, 이때 연산자+를 활용하여 true / false일때 각각 1과 0을 담는다.
    const hasSuffix = +my_string.endsWith(is_suffix);
    
    
    return hasSuffix;
}