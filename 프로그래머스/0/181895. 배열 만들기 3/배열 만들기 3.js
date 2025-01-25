// arr 배열, intervals 이차원배열?
// arr에서 intervals의 [시작인덱스, 끝인덱스]를 리턴한다.
function solution(arr, intervals) {
  // 0. 변수선언을 구조 분해 할당을 통해 intervals를 각 구간 변수로 분리한다.
  const [[a1, b1], [a2, b2]] = intervals;
  // 1. arr배열에서 intervals의 인덱스 값을 조건에 맞게 자르고 스프레드 연산자를 활용하여 병합한다. 
  const mergedIntervals = [...arr.slice(a1, b1 + 1), ...arr.slice(a2,  b2 + 1)];
  // 3. 값을 리턴한다.
  return mergedIntervals;
}