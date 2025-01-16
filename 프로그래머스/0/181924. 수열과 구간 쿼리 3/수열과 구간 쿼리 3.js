// arr 배열, 2차원 queries가 있다.
// queries의 원소는 [i, j]꼴이다.
// 이떄 query 마다 순서대로 arr[i]와 arr[j]값을 바꾼다.
// queries 처리 후 arr를 리턴한다.
function solution(arr, queries) {
    // arr을 전개구문으로 얕은복사하여 할당
    const copiedArr = [...arr];
    // 반복문을 돌려 i가 queries길이만큼 순회
    for (let i = 0; i < queries.length; i++) {
    // 구조분해할당으로 queries의 i와 j가져오기    
    const [index1, index2] = queries[i];  
    // 배열의 값을 교환하는 방법
    const tempValue = copiedArr[index1];
    copiedArr[index1] = copiedArr[index2];
    copiedArr[index2] = tempValue;
    }
    
    return copiedArr;
}