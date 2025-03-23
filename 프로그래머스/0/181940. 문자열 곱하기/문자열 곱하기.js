function solution(my_string, k) {
  const strMultiply = my_string.repeat(k);

  return strMultiply;
}

function solution2(my_string, k) {
  const strMultiply = Array(k).fill(my_string).join("");

  return strMultiply;
}
