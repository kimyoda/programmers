// 주사위 4개 a, b, c, d
// 1. 주사위 숫자가 모두 p로 같으면 1111 x p를 얻는다.
// 2. 세 주사위 숫자가 p로 같고 나머지 다른 주사위 나온 숫자가 q(p !== q)면 (10 x p + q) * (10 x p + q)
// 3. 주사위가 두 개씩 같은 값이 나오고 나온 숫자를 각각 p, q(p !== q)면 (p + q) * |p - q|?를얻는다.
// 4. 두 주사위 숫자가 p로 같고 나머지는 다른 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q !== r)이면 q * r을 얻는다.
// 5. 네 주사위에 적힌 숫자가 모두 다르면 나온 숫자중 가장 작은 숫자만큼의 점수를 얻는다.
function solution(a, b, c, d) {
   // 주사위 네개 변수
   const dice = [a, b, c, d];
    // sort로 숫자 정렬화
   dice.sort((x, y) => x - y);
   // 1. 4개 모두 같을 경우
   // 정렬된 상태에서 첫번째 숫자와 마지막 숫자가 같으면 모든 숫자가 같다
   // 1111 * dice[0]의 값을 리턴한다.
   if (dice[0] === dice[3]) {
     return 1111 * dice[0];
   } 
   // 2. 세 주사위에서 나온 숫자가 같고 나머지 다른 주사위에서 나온 숫자에 대한 로직
   if (dice[0] === dice[2]) {
     const threeSameNumber = dice[0]; // 세 번 나온 숫자
     const singleNumber = dice[3]; // 한 번 나온 숫자
     return (10 * threeSameNumber + singleNumber) ** 2;
   }
   // 첫번째 숫자가 다른경우
   if (dice[1] === dice[3]) {
     const threeSameNumber = dice[1];
     const singleNumber = dice[0];
     return (10 * threeSameNumber + singleNumber) ** 2;     
   }
   // 3. 두개씩 같은 값이 나오고, 숫자를 각각 p, q라면 (p + q) * |p - q| 
   // [p, p, q, q] 형태로 나온다.
   if (dice[0] === dice[1] && dice[2] === dice[3]) {
     const fristPairNumber = dice[0];
     const secondPairNumber = dice[2];
     return (fristPairNumber + secondPairNumber) * Math.abs(fristPairNumber - secondPairNumber);
   }
   // 4. 두 주사위에서 나온 숫자가 p로 같고 나멎 ㅣ다른 두 주사위에서 나온 숫자가 각각 p와 다른 q,r 이면 q r을 얻는다.
  // 첫번째 두 주사위 숫자가 같고, 나머지 두 숫자가 다른경우
  if (dice[0] === dice[1]) {
    const pairNumber = dice[0];
    const differentNumber1 = dice[2];
    const differentNumber2 = dice[3];
    return differentNumber1 * differentNumber2;
  }
  // 두번째와 세번째 주사위의 숫자가 같고, 나머지 두 숫자가 다른경우
  if (dice[1] === dice[2]) {
    const pairNumber = dice[1];
    const differentNumber1 = dice[0];
    const differentNumber2 = dice[3];
    return differentNumber1 * differentNumber2;
  }
  // 세번째와 네번째 주사위 숫자가 같고, 나머지 두 숫자가 다른경우
  if (dice[2] === dice[3]) {
    const pairNumber = dice[2];
    const differentNumber1 = dice[0];
    const differentNumber2 = dice[1];
    return differentNumber1 * differentNumber2;
  }
   // 네 숫자가 다른 경우, 정렬된 상태에서 첫번째 숫자는 가장 작은 값이다.
   return dice[0]; 
}