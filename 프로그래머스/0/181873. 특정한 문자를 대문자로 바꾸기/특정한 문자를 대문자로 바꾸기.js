// my_string 영소문자 문자열, alp 영소 문자 1글자
// my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾸기
function solution(my_string, alp) {
    const changedChar = my_string.replaceAll(alp, alp.toUpperCase());
    
    return changedChar;
}