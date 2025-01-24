// a, e, i, o, u 5가지 알파벳을 모음
// my_string매개변수일떄 모음을 제거한다.
function solution(my_string) {
 // 전개구문으로 문자열 my_string을 복사한다
 const copiedArr = [...my_string];
 // 다섯가지 알파벳을 따로 선언한다.
 const vowels = ['a', 'e', 'i', 'o', 'u']
 // 복사된 변수에서 모음알파벳들을 제외하고 새로운 배열로 변환 후 문자열로 만들어 리턴한다.   
 const lowerChar = copiedArr.filter(el => !vowels.includes(el.toLowerCase())).join("");

 return lowerChar;
}