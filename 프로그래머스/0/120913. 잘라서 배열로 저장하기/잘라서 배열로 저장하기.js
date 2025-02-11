// 문자열 my_str에서 n만큼 잘라서 배열을 리턴한다.
function solution(my_str, n) {
  // 1. my_str의 길이를 넘지않고 silce만큼 자른다
  let slicedArr = [];
  
  // 2. my_str길이만큼 순회
  for (let i = 0; i < my_str.length; i += n) {
    // 3. my_str.slice i부터 i + n까지 길이만큼 자른 배열을 새로운 배열로 반환한다.
    slicedArr.push(my_str.slice(i, i + n));
  }
  return slicedArr;
}