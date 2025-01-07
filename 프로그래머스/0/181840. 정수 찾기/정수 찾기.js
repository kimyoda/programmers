// num_list 정수배열, 정수 n이 있다.
// num_list안에 n이 있으면 1 혹은 0을 반환한다.
function solution(num_list, n) {
    // includes() 메서드를 활용해 특정 값이 포함되어있으면 true또는 false를 반환한다.
    // 이를 삼항연산자로 true, false를 받고 true일 때 1, false일때 0을 할당한다.
    const hasInteger = num_list.includes(n) ? 1 : 0;
    
    return hasInteger;
    
    // filter 써보기(추후 indexOf 추가)
//     const hasInteger = num_list.filter((number) => number === n).length > 0 ? 1 : 0;
    
//     return hasInteger;
}