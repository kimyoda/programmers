function solution(my_string, n) {
  const myStringChar = [...my_string].map(char => char.repeat(n)).join("");

  return myStringChar;
}