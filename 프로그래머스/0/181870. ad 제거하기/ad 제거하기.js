// 문자열 배열 strArr이 있다.
// 배열 문자열 중 "ad"라는 부분문자열을 포함하는 모든 문자열을 제거한다.
// 그리고 남은 문자열 배열순서를 유지하여 배열로 return 하는 함수를 만들어라.
function solution(strArr) {
    // 1. 문자열 배열 선언
    // filter를 사용하여 특정 조건 제거하기
    // 2. filter()를 사용해 "ad"라는 부분 문자열이 포함된 부분을 제외거한다.
    // 3. includes() 메서드를 사용해 문자열에 "ad"가 포함되어 있는 지 확인한다.
    // 4. 조건문에 !을 사용하여 "ad"가 포함되지 않은 문자열만 남긴다.
    const deletedAdStr = strArr.filter(el => !el.includes("ad"));
    
    return deletedAdStr;
}

function solution2(strArr) {
  // 문자열 배열의 담기 위한 변수 할당
  let result = [];

  // forEach를 활용하여 조건에 맞는 배열 담기
  strArr.forEach(el => {
    // includes를 통해 "ad"를 담은 문자열 제거
    if (!el.includes("ad")) {
      // push를 통해 result에 el을 포함한 할당
      result.push(el);
    }
  });

  return result;
}

