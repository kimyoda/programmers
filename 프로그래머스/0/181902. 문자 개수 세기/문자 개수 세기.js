// 알파벳으로 이루어진 my_string
// a ~ z까지의 개수를 순서대로 담은 길이 52정수배열리턴
function solution(my_string) {
  // 1. 문자열을 배열로 먼저 만든다.(0 ~ 52 대문자, 소문자를 뜻하는 아스키코드)
  const alphabetFrequencyArr = Array(52).fill(0);
  // 2. 문자열을 배열로 변환 후 순회한다.
  my_string.split('').forEach(char => {
    const charCode = char.charCodeAt(0);
    // 3. 대문자는 65부터 90까지 아스키 코드를 갖는다.
    if (charCode >= 65 && charCode <= 90) {
      // 4. 대문자(A ~ Z)의 아스키 코드에 맞춰 배열의 0 ~ 25번째 인덱스로 변환한다
      alphabetFrequencyArr[(charCode - 65)]++;
    // 소문자의 경우 97부터 시작하여 122를 넘지않는다.
    } else if (charCode >= 97 && charCode <= 122) {
      // 소문자(a ~ z, 앞의 대문자 추가 후) 배열의 26 ~ 51번째 인덱스로 변환한다.
      alphabetFrequencyArr[26 + (charCode - 97)]++;
    } 
  });
  return alphabetFrequencyArr;
}

function solution2(my_string) {
  const alphabetFrequencyArr = Array(52).fill(0);

  for (const char of my_string) {
    if (char >= "A" && char <= "Z") {
      alphabetFrequencyArr[char.charCodeAt() - "A".charCodeAt()]++;
    } else if (char >= 'a' && char <= "z") {
      alphabetFrequencyArr[26 + (char.charCodeAt() - 'a'.charCodeAt())]++;
    }
  }
  return alphabetFrequencyArr;
}
