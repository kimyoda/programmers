// num_list(정수배열), n(정수)있을 때
// n번째 원소부터 마지막 원소까지 모든 원스를 다음 리스트 리턴
function solution(num_list, n) {
    // 찾은 인덱스부터 배열의 끝까지 자른 새로운 배열을 반환
    // 원본 배열은 변경되지 않는다.
    const changedNumList = num_list.slice(n - 1);

    return changedNumList;
}
