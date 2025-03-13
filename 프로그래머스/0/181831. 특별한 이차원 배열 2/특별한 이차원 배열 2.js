// n x n에서 겹치는 인덱스가 하나라도 있으면 1 리턴
// 없으면 0 리턴
function solution(arr) {
  // 이 문제는 대칭을 활용하여 생각해야 한다.
  let result = 1;
  // 이중 반복문을 사용해서 이차원 배열 넣기
  // [i][j] = [j][i]가 같도록 하는 반복문과 조건문을 넣기(대칭)
  //
  for (let i = 0; i < arr.length; i++) {
    // arr[i].length를 넘지 않고 순회한다. 중복비교를 피하기 위해 + 1을 넣었다.
    for (let j = i + 1; j < arr[i].length; j++) {
      // 대칭이 깨지면 0을 리턴한다.
      if (arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }
  // 반복문이 끝나고 대칭이기에 1리턴.
  return result;
}

function solution(arr) {
  // 대칭 여부를 확인하는 변수 할당
  // every를 활용하여 모든 요소가 el 조건을 만족하는지 확인
  // el을 반복하고 idx를 가져온다
  const isSymmetric = arr.every((el, idx) => {
    // 내부의 모든 요소를 반복후 arr[i][j]를 인지 확인
    return el.every((val, j) => val === arr[j][idx]);
  });
  // 대칭이면 1 아니면 0 반환
  return isSymmetric ? 1 : 0;
}
