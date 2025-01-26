// 1. balls가 있고 share가 매개변수(나누어 줄 구슬)
// 2. balls 구슬 중 share개의 구술을 고르는 가능한 모든 경우 수
// 3. balls / (share - balls) * share
function solution(balls, share) {
 // 1. Array를 통해 balls와 share를 묶고, reduce를 통해 분모 값을 구한다.(balls에서  balls - share + 1까지 곱)
 // balls 3, share => 3 -> [3, 2, 1]
  const numeratoredNumber = Array.from({length: share}, (_, i) => BigInt(balls - i)).reduce((acc, cur) => acc * cur, 1n);
  // 2. Array를 통해 balls와 share를 묶고, reduce로 분자 값을 구한다.
  // share까지 길이 3, 3 + 1로 1부터 share까지의 곱
  const denominatoeredNumber = Array.from({length: share}, (_, i) => BigInt(i + 1)).reduce((acc, cur) => acc * cur, 1n);
  // 3. 분모 / 분자를 한다.
  const finalBeads = Number(numeratoredNumber / denominatoeredNumber) ;
    
  return finalBeads;
}