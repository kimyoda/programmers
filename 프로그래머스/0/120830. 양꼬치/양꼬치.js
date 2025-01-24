function solution(n, k) {
    const food = 12000;
    const drink = 2000;

    if (n >= 10) {
      k -= Number(n / 10) | 0;
    }
    
    return n * food + drink * k;
}