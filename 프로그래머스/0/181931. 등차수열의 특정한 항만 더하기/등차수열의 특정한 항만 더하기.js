// a, d정수 길이가 n인 boolean 배열 included가 있다.
// 첫항이 무조건 a, 공차가 d 인 등차수열
// included[i]가 i + 1항을 의미할때
// 1항부터 n항까지 true만 더한 값을 리턴해라.
function solution(a, d, included) {
    // a에 d를 계속 더한것중에 true만 리턴한다.
    // a + d 등차수열 included[i]가 이미 i + 1항
    // true만 더한값 리턴
    // 등차수열은 찾아봄(n 항 = 첫째 항 + (n - 1) * 공차)
    let result = 0;
    // 1. a, d 매개변수를 변수선언하여 할당한다.
    let firstNumber = a;
    let difference = d;
    // 반복문을 통해 등차수열을 구하고 included가 true일때 값을 더하여 리턴한다.
    for (let i = 0; i < included.length; i++) {
    // currentNumber는 등차수열의 i번째 항을 의미한다.
    // 등차수열의 i번째 항은 첫째 항에 (i * 공차)를 더한 값이다.
      let currentNumber = firstNumber + i *  difference;
    // included가 ture이기에 true면 result에 공차값을 더하여 리턴한다.
      if (included[i]) {
        result += currentNumber;
      }
    }
    return result;
}