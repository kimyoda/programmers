// myString이 있다.
// myString에서 "a" => "A"변환
// "A"가 아닌 모든 대문자 => 소문자 알파벳 변환
function solution(myString) {
  // 1. 스프레드 연산자로 전개 후 map으로 변환
  const changedChar = [...myString].map((el) => {
  // 2. el이 "a"일 경우
  const isLowerA = el === "a"; 
  // 3. el이 "A"일 경우
  const isUpperA = el === "A";
  // 4. el이 "A"일 경우 전부 대문자 변환
  const isUpperExceptA = el === el.toUpperCase();
  // 5. "a"일 경우 "A" 변환, A가아닌 대문자 알파벳은 전부 소문자로 변환 후 문자열로 만들어 리턴
  return isLowerA ? "A" : isUpperA ? "A" : isUpperExceptA ? el.toLowerCase(): el}).join("");
    
  return changedChar;
}


