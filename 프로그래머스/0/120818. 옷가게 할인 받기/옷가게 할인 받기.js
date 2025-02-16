// 1. 10만원 이상 5%
// 2. 30만원 이상 10%
// 3. 50만원 이상 20%
function solution(price) {
  // 1. if문으로 각 조건에 맞게 비교를 한다. 변수 할당
  let discount = 0;
  // 2. 각 조건에 맞게 if문을 거친다.
  // 500,000원을 넘길때 20%
  if (price >= 500000) {
    discount = 0.2;
    // 300,000원을 넘길때 10%
  } else if (price >= 300000) {
    discount = 0.1;
    // 100,000원을 넘길때 5%
  } else if (price >= 100000) {
    discount = 0.05;
  }
  // 소수점 이하를 버린 정수를 리턴, price의 퍼센트에 곱해서 리턴한다.
  return parseInt(price * (1 - discount));
}

function solution2(price) {
  let discount = 0;
  // 각 할인율에 맞게 case별로 거쳐서 리턴한다.
  switch (true) {
    case price >= 500000: {
      discount = 0.2;
      break;
    }
    case price >= 300000: {
      discount = 0.1;
      break;
    }
    case price >= 100000: {
      discount = 0.05;
      break;
    }
  }
  return parseInt(price * (1 - discount));
}
