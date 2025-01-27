// 정수배열 arr, query
// query를 순회한다
// 짝수인덱스에서 arr에서 query[i]인덱스를 제외
// 배열의 query[i]인덱스 뒷부분 잘라서 버린다
// 홀수 인덱스 arr에서 query[i]번 인덱스 제외
// 배열 query[i]인덱스 앞부분 잘라버린다
// arr의 부분배열 리턴
function solution(arr, query) {
  let slicedArr = [...arr]
  // 1. arr 짝수인덱스 경우 query[i]인덱스 제외
  for (let i = 0; i < query.length; i++) {
  // 2. 짝수인덱스일때 query[i] 뒷부분 잘라서 버린다
   if (i % 2 === 0) {
    slicedArr = slicedArr.slice(0, query[i] + 1);
   } else if (i % 2 !== 0){
  // 3. 홀수 인덱스 경우 query[i]번 제외
    slicedArr = slicedArr.slice(query[i], slicedArr.length);
   } 
  } 
  return slicedArr;
}