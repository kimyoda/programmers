// 정수 배열 arr, delete_list
// arr 원소 중 delete_list 원소 모두 삭제
function solution(arr, delete_list) {
  // arr의 요소 중 delete_list를 모두 삭제
  const filteredDeleteArr = arr.filter(el => !delete_list.includes(el));
    
  return filteredDeleteArr;
}
