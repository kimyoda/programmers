function solution(num_list, n) {
  const result = [];

  for (i = 0; i < n; i++) {
    result[i] = num_list[i];
  }
  return result;
}

function solution2(num_list, n) {
  const slicedArr = num_list.slice(0, n);

  return slicedArr;
}
