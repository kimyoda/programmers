// 음이 아닌 정수 9로 나누 나머지
// 숫자의 합을 9로 나눈 나머지와 같다
// 음이 아닌 정수가 문자열 number로 있을 때, 이걸 9로 나눈 나머지를 리턴.
function solution(number) {
    // 123 / 9 = 13.666
    // 몫 13, 나머지 6 그래서 6리턴.
    // split를 써서 문자열을 배열로 만들고, map으로 문자열을 Number로 바꾸고 reduce로 number의 숫자들을 더한 뒤 9로 나눈 값을 리턴한다.
    const nineRemainderNumber = number.split("").map(Number).reduce((acr, cur) => acr + cur) % 9;
    return nineRemainderNumber;
}