// 1. 최빈값은 가장 자주 나오는 값
// 2. 정수배열 array가 매개변수로 있을 때, 자주 나오는 값을 return
// 3. 최빈값이 2개이상이면 -1 리턴

function solution(array) {
    // 값을 카운트하는 변수
    const count = {};
    // for each문을 활용해 count 최빈값 구해보기
    for (let num of array) {
      count[num] = (count[num] || 0) + 1
    };
    // 가장 큰 등장 횟수를 찾는다.
    const maxCount = Math.max(...Object.values(count));
    // 최빈값 찾기(최댓값과 같은 등장 횟수)
    const mode = Object.keys(count).filter(el => count[el] === maxCount);
    // 최빈값이 여러 개면 -1 하나면 해당 숫자를 반환
    return mode.length > 1 ? -1 : Number(mode[0]);
}