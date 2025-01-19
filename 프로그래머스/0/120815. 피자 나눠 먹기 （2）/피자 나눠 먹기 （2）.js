// 6조각으로 피자를 잘라준다
// n이 매개변수
// n이 주문한 피자를 모두 같은 수의 조각을 먹어야 한다
function solution(n) {
    // 피자 조각 1부터 순회
    for (let plates = 1; plates <= n; plates++) {
          // 6을 곱했을때 plates가 n으로 나눠지는 값 할당  
      if((6 * plates) % n === 0) {
        // 조건을 만족하는 plates를 할당한다.
        return plates;
      }
    }
    
}