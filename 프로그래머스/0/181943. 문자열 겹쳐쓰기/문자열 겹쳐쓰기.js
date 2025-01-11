// 문자열 my_string, overwrite_string, 정수 s
// 문자열 my_string의 인덱스 s부터 
// overwrite_string 길이만큼 문자열 overwrite_string
// 로 바꾼 문자열 리턴
function solution(my_string, overwrite_string, s) {
    // 1. 앞부분, my_string의 s이전까지의 길이
    const frontStr = my_string.slice(0, s);
    // 2. my_string에서 덮어쓴 이후 길이
    const backStr = my_string.slice(s + overwrite_string.length);
    // 앞부분 + 덮어쓴 문자열 + 뒷부분을 이어붙여 반환
    return frontStr + overwrite_string + backStr;
}