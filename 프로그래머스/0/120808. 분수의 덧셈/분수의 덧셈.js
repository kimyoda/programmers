// 분수로 덧셈을 하기 이해선 최소공배수가 필요하다
// 분모끼리 구한값에 최소공배수 할당하기 
// 최소공배수 할당한 분모에 분자를 각각 곱하여 분자를 구하고, [분자, 분모]를 배열요소로 리턴한다.
function solution(numer1, denom1, numer2, denom2) {
    // 1. 최대공약수
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    // 2. 최소공배수
    const lcm = (a, b) => (a * b) / gcd(a, b);
    // 3. 공통분모에 최소공배수 할당하기
    const commonDenom = lcm(denom1, denom2);
    // 4. 공통분자 즉 기약변수를 분자 * 공통분모 / 분모1 식으로 구하여 할당하기
    const commonNumer = numer1 * (commonDenom / denom1) + numer2 * (commonDenom / denom2);
    // 5. 공통분와 분모에 최대공약수 할당
    const gcdValue = gcd(commonNumer, commonDenom);
    // 6. 공통분모 나누기 최대공약수 값이 기약분수 값을 리턴한다.
    return [commonNumer / gcdValue, commonDenom / gcdValue];
}