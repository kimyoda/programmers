function solution(money) {
  const restoftheCount = [];

  restoftheCount.push(parseInt(money / 5500));
  restoftheCount.push(money % 5500);

  return restoftheCount;
}

function solution2(money) {
  const CupofAmericanoPrice = 5500;
  const maxCupCount = Math.floor(money / CupofAmericanoPrice);
  const restoftheCount = money - maxCupCount * CupofAmericanoPrice;

  return [maxCupCount, restoftheCount];
}
