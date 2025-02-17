// 개미 군단이 사냥감의 체력에 맞는 병력을 데리고 나가려고 한다.
// 장군개미 5, 병정개미 3, 일개미 1
// 23여치 장군개미 4마리 병정 1마리로도 가능
// hp는 자연수
function solution(hp) {
  // 1. 담을 변수
  let antCount = 0;
  // 2. 장군 개미 공격력만큼 깍인다.
  antCount += Math.floor(hp / 5);
  hp %= 5;
  // 3. 병정 개미 공격력만큼 깍인다
  antCount += Math.floor(hp / 3);
  hp %= 3;
  // 4. 일개미 공격력 만큼 깍인다.
  antCount += hp;
  return antCount;
}

function solution2(hp) {
  // 1. 담을변수
  let antCount = 0;
  // 2. 공격력을 배열로 저장(큰값부터 순서대로)
  const attackPower = [5, 3, 1];

  // 3. for of문을 통해 각 개체마다 순회하여 값을 더하고 나눈다.
  for (const power of attackPower) {
    antCount += Math.floor(hp / power);
    hp %= power;
  }

  return antCount;
}
