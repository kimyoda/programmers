// 문자열 배열리스트 str_list, 문자열 ex
// 꼬리문자열(문자의 순서대로 합친 문자열)
// str_list에서 ex를 포함한 문자열을 제외하고 만든 꼬리 문자열을 리턴해라
function solution(str_list, ex) {
    // 1. 배열리스트에서 문자열 ex를 포함한 배열은 제외한다. 
    const filterdStrList = str_list.filter((el) => !el.includes(ex));
    // 2. 제외한 문자열 리스를 빼고, 남은 문자열을 순서대로 이어붙여 리턴한다.
    return filterdStrList.join('');
}