// 1. n의 약수를 구한다
// 2. n의 약수의 오름차순을 구한다
// 3. 오름차순을 담은 배열을 return 한다.
function solution(n) {
  const answer = [];
  // 약수를 나눌 변수 설정
  const divisorArray = [];
  // 반복문을 통하여 n만큼 반복
  for (let i = 1; i <= n; i++) {
    // n의 약수를 구하고 divisorArray에 담기
    if (n % i === 0) {
      divisorArray.push(i);       
    }
  }
  // sort를 활용하여 오름차순식으로 divsisorArray에 담기   
  divisorArray.sort((a, b) => a - b);
  // 쓰레드연산자와 push메서드를 활용하여 answer에 담기
  answer.push(...divisorArray)
    
  return divisorArray
}