// 정수배열 num_list가 있다.
// num_list에 가장 작은 5개의 수를 오름차순으로 담은걸 리턴해라.
function solution(num_list) {
    // 1. num_list의 복사본 배열을 할당하기
    const copiedMinNumberList = [...num_list]
    // 2. num_list의 가장 작은 5개 수 구하기 오름차순으로 정렬한다.(sort) 
    const smallestFiveNumber = copiedMinNumberList.sort((a, b) => a - b);
    // 2. slice로 sort 정렬된 배열을 0번부터 5번까지 리턴하여 종료한다.
    return smallestFiveNumber.slice(0, 5);
}