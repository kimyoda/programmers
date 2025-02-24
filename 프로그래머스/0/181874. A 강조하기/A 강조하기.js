// myString이 있다.
// myString에서 "a" => "A"변환
// "A"가 아닌 모든 대문자 => 소문자 알파벳 변환
function solution(myString) {
  // 1. 스프레드 연산자로 전개 후 map으로 변환
  const changedChar = [...myString]
    .map((el) => {
      // 2. el이 "a"일 경우
      const isLowerA = el === "a";
      // 3. el이 "A"일 경우
      const isUpperA = el === "A";
      // 4. el이 "A"일 경우 전부 대문자 변환
      const isUpperExceptA = el === el.toUpperCase();
      // 5. "a"일 경우 "A" 변환, A가아닌 대문자 알파벳은 전부 소문자로 변환 후 문자열로 만들어 리턴
      return isLowerA
        ? "A"
        : isUpperA
        ? "A"
        : isUpperExceptA
        ? el.toLowerCase()
        : el;
    })
    .join("");

  return changedChar;
}

function solution2(myString) {
  // 1. 변수 선언
  let changedChar = "";

  // 2. for of문을 통해 myString에 해당하는 모든 문자열을 순회
  for (const char of myString) {
    // 3. char가 "a"일 경우, "A"로 추가한다.
    if (char === "a") {
      changedChar += "A";
      // 4. char가 "A"가 아니면 char를 소문자로 바꾸고 추가한다.
    } else if (char !== "A" && char === char.toUpperCase()) {
      changedChar += char.toUpperCase();
      // 5. 그 외의 경우 char를 추가한다.
    } else {
      changedChar += char;
    }
  }
  return changedChar;
}
