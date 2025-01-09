// start_num, end_num있다.
// start_num에서 end_num까지 1씩 감소하는 수를 배열로 담아라.
function solution(start_num, end_num) {
    const counts = [];
    // 1. for문으로 start_num에서 end_num까지 1씩 감소하기
    for (let i = start_num; i >= end_num; i--) {
      counts.push(i);
    }
    
    return counts;
}