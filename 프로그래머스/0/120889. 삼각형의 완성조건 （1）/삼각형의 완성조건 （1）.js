// sides에서 가장 긴 변을 구하기
// sides에서 max를 제외한 값들을 더해야한다
// 삼각형을 만들 수 있으면 1, 없으면 2
function solution(sides) {
  // sides의 최대값을 변수에 할당한다.
  const max = Math.max(...sides);
  // reduce로 남은 값들을 합치고 max를 뺸 값을 할당한다.
  const sum = sides.reduce((a, b) => a + b, 0) - max;
  // 만들 수 있으면 1 없으면 2를 리턴
  const isTriangle = max < sum ? 1 : 2;
    
  return isTriangle;
}
