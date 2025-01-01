// num_list 정수배열, 첫번째 음수의 인덱스를 return한다
// 이때 음수가 없으면 -1을 리턴한다.
function solution(num_list) {
    // num_list에서 음수가 나오는 인덱스를 리턴
    // 없으면 -1 리턴
    const answer = num_list.findIndex((num) => num < 0);
    return answer;
}