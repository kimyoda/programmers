function solution(n) {
  let pairCount = 0;  
  for (let a = 1; a <= n; a++) {
    if (n % a === 0 && Number(n / a) > 0) {
    pairCount++;
    }      
  }
  return pairCount;
}

