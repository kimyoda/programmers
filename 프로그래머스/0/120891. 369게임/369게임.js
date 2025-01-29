// 369가 있고, 1부터 하나씩 하면서 3, 6, 9는 개수를 센다
// order가 매개변수다.
// 369의 개수만큼 리턴해라.
function solution(order) {
  // 1. 3의 배수가 아니라 369가 들어가있는 지 확인
  const checkedThreeGameStr = String(order); 
  // 2. 369의 자릿수와 상관없이 확인해야 한다.(3,6,9가 포함되어있는 지)
  // 3. checkedThreeGameStr 문자열을 배열로 만들고, filter안에 있는 includes를 통해 요소가 "369"가 포함되면 true 아니면 false로 할때, 변수의 길이에서 쳐야할 박수 횟수를 리턴한다.
  const filteredThreeGameNumberList = checkedThreeGameStr.split("").filter((el) => "369".includes(el)).length;
    
  return filteredThreeGameNumberList;
}