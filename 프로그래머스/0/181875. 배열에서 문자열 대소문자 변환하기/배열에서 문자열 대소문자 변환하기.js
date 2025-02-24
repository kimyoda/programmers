// 1. 문자열 배열이 있을 때, 홀수 인덱스 문자열은 대문자로 변환
// 2. 짝수 인덱스 문자열은 소문자로 변환하고 리턴으로 담는다.
function solution(strArr) {
  // 1. 조건은 배열인덱스가 짝수일 경우 소문자, 홀수일 경우 대문자 반환
  const convertedArrStr = strArr.map((el, idx) =>
    idx % 2 === 0 ? el.toLowerCase() : el.toUpperCase()
  );
  return convertedArrStr;
}

function solution2(strArr) {
  // 변수선언
  let convertedArrStr = [];

  // 1. forEach를 통해 인덱스가 짝수일 경우 소문자, 홀수일 경우 대문자 변환하여 할당
  strArr.forEach(el, (idx) => {
    // 2. 짝수 인덱스일 때. 소문자로 변환 후 배열에 추가한다.
    if (idx % 2 === 0) {
      convertedArrStr.push(el.toLowerCase());
      // 3. 홀수 인덱스일 때, 대문자로 변환 후 배열에 추가한다.
    } else if (idx % 2 !== 0) {
      convertedArrStr.push(el.toUpperCase());
    }
  });
  return convertedArrStr;
}
