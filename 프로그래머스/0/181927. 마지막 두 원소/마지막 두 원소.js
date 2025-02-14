// num_list가 있을 때
// 1. 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀값 더하기
// 2. 마지막 원소가 그 전 원소보다 크지 않으면 마지막 원소를 두배한값을 추가한다.
function solution(num_list) {
  // 1. 마지막 원소를 담은 변수 할당
  const lastIdx = num_list.length - 1;
  // 2. 마지막 원소에서 그전 원소를의 차이를 계산하여 변수에 할당
  const diff = num_list[lastIdx] - num_list[lastIdx - 1];
  // 3. 마지막 원소가 0보다 클때 차이를 추가
  if (diff > 0) {
    num_list.push(diff);
  } else {
    // 4. 원소가 마지막 원소의 두배값을 곱하여 추가한다.
    num_list.push(num_list[lastIdx] * 2);
  }
  return num_list;
}
