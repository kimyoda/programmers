// 1. num_list 정수배열, n 매개변수
// 2. 배열 길이일때 n의 수만큼 배열로 이차원으로 만들어 리턴
// slice로 나누고 push로 추가한다.
function solution(num_list, n) {
  const groupedArray = [];
  // n개씩 자르기 위해 num_list를 n만큼 증가시켜 순회한다.
  for (let i = 0; i < num_list.length; i += n) {
    // finalArr에 num_list의 i부터 i + n만큼 자른 부분 배열을 push로 추가하여 이차원 배열을 만든다.
    groupedArray.push(num_list.slice(i, i + n));
  }
  return groupedArray;
}