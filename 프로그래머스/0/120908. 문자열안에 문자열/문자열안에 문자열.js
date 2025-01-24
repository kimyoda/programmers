function solution(str1, str2) {
  const isIncludedStr = str1.includes(str2);

  return isIncludedStr ? 1 : 2;
}