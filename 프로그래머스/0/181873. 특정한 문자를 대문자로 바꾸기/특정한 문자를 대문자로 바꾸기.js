// 1. 문자열의 alp에 해당 글자를 대문자로 바꾼 문자열 리턴
function solution(my_string, alp) {
    const answer = "";
    let changeStr = "";
    
    // alp에 해당하는 글자를 대문자로 바꾼다.
    for (let i = 0; i < my_string.length; i++) {
      if (my_string[i] === alp) {
       changeStr += my_string[i].toUpperCase();  
      } else if (my_string[i] !== alp) {
       changeStr += my_string[i];
      }
    }
    return changeStr;
}