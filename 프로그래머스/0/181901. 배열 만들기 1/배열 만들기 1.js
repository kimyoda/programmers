// 숫자 n, k가 있을 때
// 1 이상 n 이하의 정수중 k의 배수를
// 오름차순으로 저장한 배열을 리턴.
function solution(n, k) {
    // 1. 변수 선언
    const answer = [];
    // 2. result 길이구하는걸 고민하자
    // n이있고 k가 반복해서 n만큼 안넘고
    for (let i = 1; i <= n / k; i++) {
    answer.push(i * k);   
    }
    return answer;
}