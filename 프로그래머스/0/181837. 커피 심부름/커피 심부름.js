// order에 원소가 아메리카노, 카페라떼가있다.
// 아메리카노는 4500, 카페라떼는 5000원이다(뜨거운것 차가운것 상관없이), 아무거나는 아메리카노(차가운)
// 직원이 적은 메뉴 문자열 배열 order가 있을 때 결제하게 될 금액을 return
function solution(order) {
  // 1. 아메리카노의 값 라떼의 값 할당(차가운거 상관없이)
  // 객체로 americano, cafelatte각 값을 뺀다.
  const priceMap = {
    americano: 4500,
    cafelatte: 5000,
  };
  // 2. filter로 americano, latte, anything일 때 includes로 포함시키기
  const americanoCount = order.filter(el => el.includes("americano")).length;
  const latteCount = order.filter(el => el.includes("cafelatte")).length;
  const anythingCount = order.filter(el => el.includes("anything")).length;
  // 3. 각 메뉴의 가격을 계산 후, reduce를 이용해 총 결제 금액을 구한다.
  const totalPrice = [americanoCount * priceMap.americano, latteCount * priceMap.cafelatte, anythingCount * priceMap.americano].reduce((acc, cur) => acc + cur, 0);
    
  return totalPrice;
}