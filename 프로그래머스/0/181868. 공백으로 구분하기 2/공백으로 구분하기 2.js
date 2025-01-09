// 공백 한개 이상으로 구분되어있는 문자열 my_string
// my_string 나온 단어를 앞에서부터 순서대로 담은 문자열 배열
function solution(my_string) {
  // 1. my_string 문자열 공백을 제거한다.
  // 2. split로 공백을 구분하여 자르고(빈 문자열도 포함), 그 자른 값을 filter로 빈 문자열인지 아닌지 판별하고 트루일경우 변수에 새로운 배열을 반환한다.
  const splitedWordsArr = my_string.split(" ").filter((el) => el);

  // 2. 값을 리턴한다.
  return splitedWordsArr;
}
