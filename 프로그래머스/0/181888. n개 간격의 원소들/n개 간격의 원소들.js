// 1. 정수배열 num_list / 정수 n이있다.
// 2. num_list 첫번째부터 마지막까지 n개 간격으로 저장된 리스트 리턴
function solution(num_list, n) {
    // num_list를 n개 간격으로 원소를 리스트로 담기
    const result = num_list.filter((el, idx) => (idx % n === 0));
    // filter 동작
    // 1. el(값), idx(인덱스) 매개변수를 가지고, 값이 트루일 경우 새로운 배열에 반환되고 false일 시 포함되지 않고, 다음 순회로 넘어간다.
    // 2. 콜백의 조건인 idx가 n이 0일 경우 true로 새로운 배열에 포함, 아닐 시 배열에 포함되지 않고 다음 조건으로 순회한다.
    // 3. filter의 새로운 배열을 함수의 매개변수에 담고, 이를 선언한 변수에 값을 할당한다.
    return result;
}