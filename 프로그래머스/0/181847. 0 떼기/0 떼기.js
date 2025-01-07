// 정수로 이루어진 문자열 n_str이 있다.
// n_str의 가장 왼쪽에 청므 등장하는 0을 뗀 문자열 리턴(0만 뗀다)
function solution(n_str) {
    // n_str이 있을때 가장 왼쪽에 있는 0만 제거하고 값을 변수에 할당해 리턴한다.
    
   // 1. n_str을 Number로 숫자로 만든다.
   // 2. 정수면 저 앞에 0 다 없어진다.
   // 3. 정수화된 숫자를 문자열로 변환한다.
    const convertedNumber = Number(n_str);
    return convertedNumber.toString();
}