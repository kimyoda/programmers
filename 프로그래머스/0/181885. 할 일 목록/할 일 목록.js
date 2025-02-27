// 문자열 배열 todo_list, bolean 배열 finished
// todo_list에서 마치지 못한 일들을 순선대로 담은 문자열 배열 리턴
function solution(todo_list, finished) {
  // filter를 통해 todo_list에서 끝나지않은 finished의 값을 false인 부분만 필터링하여 새로운 배열로 담는다. 
  const filteredTodoList = todo_list.filter((_, idx) => !finished[idx]);
  return filteredTodoList;
}