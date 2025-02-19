// my_string이 매개변수
// my_string 모든 자연수들의 합을 return
function solution(my_string) {
  // 1. my_string을 배열로 변환한다.
  // 2. filter를 통해 isNaN의 요소중 숫자인 문자만 남기기 redcue를 통해 합치고 Number(b)를 통해 숫자로 합친다.
  const totalSum = my_string.split("").filter(el => isNaN(el) === false).reduce((a, b) => a + Number(b), 0);
                                         
  return totalSum;
}
