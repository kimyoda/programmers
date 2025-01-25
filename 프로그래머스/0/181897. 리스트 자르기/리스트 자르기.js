// 정수 n, 3개가 담긴 slicer, 여러개가 담긴 num_list
// slicer에 담긴 정수를 e, b, c라고 한다
// n에 따라 num_list를 슬라이싱
// n = 1 : num_list 0 ~ b까지
// n = 2: num_list a ~ 마지막인덱스까지
// n = 3: num_list a ~ b까지
// n = 4: num_list a ~ b번을 c 간격으로
function solution(n, slicer, num_list) {
  // 0. slicer에 담긴 정수를 구조 분해 할당으로 뺀다.
  const [a, b, c] = slicer;
  // 1. switch문을 통해 각각의 조건에 맞게 리턴
  switch (n) {
  // 2. n = 1 : num list 0 ~ b까지 자르기
    case 1:
      return num_list.slice(0, b + 1);   
  // 3. n = 2 : num list a ~ 마지막 인덱스까지
    case 2: 
      return num_list.slice(a);
  // 4. n = 3 : num list a ~ b까지
    case 3:
      return num_list.slice(a, b + 1);
  // 5.  n = 4 : num_list a ~ b를 c간격으로 해야하기에 filter를 활용한다
    case 4:
      return num_list.slice(a, b + 1).filter((_, idx) => idx % c === 0);
  }
}