// 문자열 my_string 정수 m / c
// 한 줄에 m글자씩 가로로 적고
// 세로로 c 번째 열에 적힌 글자들을 문자열로 리턴
function solution(my_string, m, c) {
  // 0. 변수 선언
  let collectedChars = '';
  let firstNumberStr = m;
  let secondNumberStr = c;
  // 1. firstNumberStr 단위로 문자열으 순회한다.
  for (let i = 0; i < my_string.length; i += firstNumberStr) {
    // m글자 씩 나눠 현재 행을 가져온다.
    const firstChar = my_string.slice(i, i + firstNumberStr);
    // fisrtChar에서 secondNumberStr번째 글자를 추출하여 추가한다.
    collectedChars += firstChar[secondNumberStr - 1];
  }
  return collectedChars;
}

function solution2(my_string, m, c) {
  // 문자열을 m개씩 끊어서 배열 만들기
  const rows = [];

  // for문을 쓰지만 push 하고 slice로 잘라서 추가하기
  for (let i = 0; i < my_string.length; i+= m) {
    rows.push(my_string.slice(i, i + m));
  }

  // 각 c번째ㅐ 글자만 뽑아서 join
  const collectedChars = rows.map(el => el[c -1]).join("");
    
  return collectedChars;
}