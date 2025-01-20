// numbers와 문자열 direction이 매개변수
// numbers의 원소를 direction 방향으로 한칸씩 회전
function solution(numbers, direction) {
    // 전개구문으로 numbers 배열 얕은복사하기.
    const copiedArr = [...numbers];
    // 1. direction이 "right"와 같을 경우
    if (direction === "right") {
    // 2. right로 해야하므로, pop으로 마지막 요소를 제거하고 unshift로 맨 앞쪽에 추가하고 새로운 길이를 반환한다.
    const lastValue = copiedArr.pop();     copiedArr.unshift(lastValue);
    // 3. direction이 "left"와 같을 경우
    } else if (direction === "left") {
    // 4. left로 하나씩 옮기는 과정으로 shift 후 push로 마지막 요소를 추가한다.
    const firstValue = copiedArr.shift();
    copiedArr.push(firstValue);
    } 
    
    return copiedArr;
}