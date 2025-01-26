// 정수배열 emergency 가 있다.
// 이때 정수 숫자중 응급도 즉 숫자가 큰 인자를 인덱스를 가장 높게 리턴받는다.
function solution(emergency) {
  // 1. 배열을 내림차순으로 정렬해서 큰 값부터 순서를 정한다.[3, 76, 24] => [76, 24, 3] 
  const sortedEmergency  = [...emergency].sort((a, b) => b - a);
  // 2. 배열을 순회하고 배열에서 순위를 찾는다, 요소의 순위를 indexOf로 찾고 인덱스는 0부터 시작하여 + 1을 하여 값을 리턴한다.
  const emergencyRanks = emergency.map((el) => sortedEmergency .indexOf(el) + 1);
  // 3. 배열에서 원소의 위치를 찾아 위치 + 1로 순위를 정한다.(인덱스로 찾기 때문에)
  return emergencyRanks;
}