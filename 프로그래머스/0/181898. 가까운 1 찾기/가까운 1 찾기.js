// 정수배열 arr의 원소는 1 or 0
// 정수 idx가 있을 때 idx보다 크고, 배열의 값이 1인 가장 작은 인덱스를찾아서 반환한다.(이때 3을 return한다.)
// 단, 그런 인덱스가 없으면 -1을 반환한다.
function solution(arr, idx) {
    // 1. 정수배열에서 idx보다 크고 값이 1인 가장 작은 인덱스 찾기
    // 2. findIndex()로 배열의 첫번째 요소에 대한 인덱스를 반환한다. 만족하는 요소가 없으면 -1을 반환한다.
    // 3. index가 정수보다 크거나 같을 때 el(요소)이 1과같은 인덱스를 찾아 반환한다. 없으면 -1을 리턴.
    const findedIndex = arr.findIndex((el, index) => index >= idx && el === 1);    

    return findedIndex;
}

function solution2(arr, idx) {
    // indexOf 배열에서 주어진 요소를 찾을 수 있는 인덱스를 반환하고, 찾을 수 없는 경우 -1을 반환한다.
    // idx의 인덱스에 해당하는 부분을 제외하고 그 다음에서 1을 찾아 리턴한다.
    const findedIndex = arr.indexOf(1, idx);
    
    
    return findedIndex;
}