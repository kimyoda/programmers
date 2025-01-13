// str1과 str2는 길이가 같은 문자열이다 
// 두 문자열의 앞에서부터 번갈아가며 문자열을 넣는다.
function solution(str1, str2) {
    // 두 문자열의 각 문자를 번갈아가며 하나의 문자열로 합친다.
    let mixedStr = '';
    // i가 str1의 길이만큼 반복
    for (let i = 0; i < str1.length; i++) {
    // 순회한 값을 += 연산자를 활용하여 str1과 str2의 i 번째 문자를 합친다.
      mixedStr += str1[i] + str2[i];
    }
    return mixedStr;
}