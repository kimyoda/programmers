// 문자열 매개변수가 있다.
// a op b 는 형태의 이항식 / a, b가 음이 아닌 정수
// op는 +, -, * 중 하나이다(연산자)
// 식을 계산한 정수를 리턴해라?
function solution(binomial) {
    // 1. 문자열을 a, b로 공백기준으로 나눈다. spilt가 적절하다고 생각
    const splitedStrParts = binomial.split(" ");
    // 2. 나눈 그 문자열을 정수로 바꾼다.(첫번째 요소와 세 번째 요소를 숫자로 변환)
    const firstNumber = Number(splitedStrParts[0]);
    const secondNumber =  Number(splitedStrParts[2]);
    // 3. switch 문을 사용하여 각 연산에따라 값을 리턴한다.(op split로 자른 값 1위치에 있어 처리)
    switch (splitedStrParts[1]) {
      // 첫번째 케이스 "+"가 맞으면 리턴하여 종료
      case "+":
        return firstNumber + secondNumber;
      // 두번째 케이스 "-"가 맞으면 리턴하여 종료
      case "-":
        return firstNumber - secondNumber;
      // 세번째 케이스 "*"가 맞으면 리턴하여 종료
      case "*":
        return firstNumber * secondNumber;      
    }
}