// 문자열 my_string, 정수 배열 index_list
// my_string의 index_list 인덱스에서
// 글자들을 순서대로 이어 붙인 문자열을 리턴
function solution(my_string, index_list) {
  // 1. 문자열 저장하는 변수 할당
  let sumStr = "";
  // 2. forEach의 인덱스만큼 문자열을 추가하여 리턴한다.
  index_list.forEach((idx) => {      
    sumStr += my_string[idx];
  });
  return sumStr;
}

