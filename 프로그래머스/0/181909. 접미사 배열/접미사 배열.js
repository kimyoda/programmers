// 문자열 my_string이 매개변수일때,
// 모든 접미사를 사전순으로 정렬한
// 문자열 배열을 return한다
function solution(my_string) {
    let suffixList = [];
    // 스프레드 연산자로 얕은복사
    const copiedSuffixList = [...suffixList];
    // 문자열 길이만큼 반복 후 문자열의 현재 인덱스부터 끝까지 부분 문자열 추출하여 문자열에 추가, 그 값을 push메서드로 배열에 추가한다. 
    for (let i = 0; i < my_string.length; i++) {
      copiedSuffixList.push(my_string.slice(i))
    }
    // 값이 담긴 배열자체를 sort로 정렬시켜 담는다.
    copiedSuffixList.sort();
    
    return copiedSuffixList;
}