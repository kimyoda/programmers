function solution(my_string, queries) {
    // 문자열을 배열로 변환하여 인덱스 기반으로 수정
    const charArr = my_string.split("");
    
    // quereise 배열을 순회하여 범위에 대해 문자열을 뒤집는 작업 수행
    queries.forEach(([s, e]) => {
      // s부터 e + 1 까지의 범위를 추출하고 뒤집는다.
      const reversedStr = charArr.slice(s, e + 1).reverse();
      // 추출한 뒤집힌 문자열을 원본 배열의 범위에 삽입하고, s부터 e - s + 1 개의 요소를 제거 후, 뒤집은 문자열 삽입
      charArr.splice(s, e - s + 1, ...reversedStr);
    })
    return charArr.join("");
}