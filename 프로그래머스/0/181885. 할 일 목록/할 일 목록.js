function solution(todo_list, finished) {
  const unfinishedWorks = [];
  const todo_listLength = todo_list.length;

  for (let i = 0; i < todo_listLength; i++) {
    if (!finished[i]) {
      unfinishedWorks[unfinishedWorks.length] = todo_list[i];
    }        
  }
  return unfinishedWorks;
}