// myString이 있다.
// 1. myString을 문자 "x"를 기준으로 나눌때,
// 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return해라.
function solution(myString) {
  // 1. myString을 x를 기준으로 나눠진 배열을 반환한다.
  // 2. map을 활용해 나눠진 문자열 각각의 길이를 새로운 배열로 반환한다. 
  // 3. 메소드 체이닝을 split()로 문자열을 나누고, 배열에 대해 map()을 호출해 요소의 길이를 새로운 배열로 반환하는 과정을 한번에 처리한다.
  const delimitedStr = myString.split('x').map(el => el.length);

  return delimitedStr;
}

function solution2(myString) {
  // 값을 담을 변수를 할당
  let result = [];
  let count = 0;

  // for of를 활용하여 x와 같을때와 다를때 값 추가
  for (str of myString) {
    // 'x'와 같을 경우
    if (str === 'x') {
      result.push(count);
      // count를 길이 초기화
      count = 0;
    } else {
      // x와 다를 경우 count 증가
      count++;
    }
  }
  // 마지막 문자열 길이 추가
  result.push(count);

  return result;
}



