// myString, pat
// myString에서 pat이 등장하는 횟수
// ana이 banana 1~3 / 3 ~ 5두번 등장
function solution(myString, pat) {
  // pat을 찾을 때 카운트
  let count = 0;
  // 첫번째 pat값 찾기
  let currentIndex = myString.indexOf(pat);
  // findIndex가 있을때까지 반복하기
  while (currentIndex !== -1) {
    // 찾으면 개수를 증가 시키고
    count++;
    // 찾는 인덱스에서 pat의 인덱스를 옮기면서 다시 반복하여 찾고 할당하여 값을 담는다.
    currentIndex = myString.indexOf(pat, currentIndex + 1);
  }
  return count;
}