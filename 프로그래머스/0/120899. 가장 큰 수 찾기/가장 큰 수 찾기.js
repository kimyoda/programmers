// 1. 가장 큰 수를 찾아야 한다(해당 매서드 참고)
// 2. 가장 큰 수의 인덱스를 찾아야 한다
// 3. 큰 수의 숫자와 인덱스가 담긴 배열 리턴

function solution(array) {
  // 1. Math.max를 통해 array의 가장 큰 값을 할당한다.
  const max = Math.max(...array);
  // 2. indexOf에 가장 큰 값을 할당하여 array의 가장 큰값의 인덱스를 할당한다.
  const maxIndex = array.indexOf(max);
  // 3. 가장 큰 값과 큰 수의 인덱스를 담은 배열을 리턴한다.
  const maxNumbers = [max, maxIndex];
    
  return maxNumbers;
}