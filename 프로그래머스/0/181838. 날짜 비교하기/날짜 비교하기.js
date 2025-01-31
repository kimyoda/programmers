// 1. 2배열의 인덱스 중 day에 해당하는 index에서 date1이 date2보다 앞서는 날짜구하기
// 앞서면 1 니면 0을 리턴
function solution(date1, date2) {
  // 연도, 월, 일을 전부 문자열로 변환
  // 20211228 
  const firstDateDay = Number(date1.join(""));
  // 연도, 월, 일을 전부 문자열로 변환
  // 20211229
  const secondDateDay = Number(date2.join(""));
  // date2가 크면 1 아니면 0을 리턴
  return firstDateDay < secondDateDay ? 1 : 0;
}