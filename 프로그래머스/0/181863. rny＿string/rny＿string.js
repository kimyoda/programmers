// 1. rny_string을 모든 m을 rn으로 바꾼 문자열 리턴(영소문자)
function solution(rny_string) {
    const changedString = rny_string.replaceAll("m", "rn");
    
    return changedString;
}