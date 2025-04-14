// 1. numbers라는 매개변수가 주어진다(영어로 표기)
// 2. 영어를 숫자로 바꾸려고 한다.
// 3. numbers를 정수로 바꿔 리턴해라.
function solution(numbers) {
  // 1. 영어를 객체화해서 선언한다.
  const numberMap = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  // 2. 객체화 된 값을 반복하여 3글자, 4글자, 5글자, 6글자에 매칭되서 숫자와 매칭한다.
  let i = 0;
  // 숫자를 이어붙일 문자열 변수할당
  let strEngNumber = "";

  while (i < numbers.length) {
    // 3. 3과 같고 5를 넘지낳고 같은 숫자(최대 숫자가 seven)
    for (let j = 3; j <= 5; j++) {
      // 4. slice로 값을 잘라서 변수에 할당한다.
      const strNumbers = numbers.slice(i, i + j);
      // 5. 위의 객체화 된 값을 매칭시킨다.
      if (numberMap[strNumbers]) {
        // 6. 매칭된 숫자들을 이어붙인다.
        strEngNumber += numberMap[strNumbers];
        i += j;
        break;
      }
    }
  }
  // 문자열을 숫자로 리턴
  return Number(strEngNumber);
}

function solution2(numbers) {
  // 배열로 만든다 numbers의 문자열을
  const numStr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  // forEach를 활용하여 나누고 문자열로 변환한다.
  numStr.forEach((el, idx) => {
    numbers = numbers.split(el).join(idx);
  });

  return Number(numbers);
}
