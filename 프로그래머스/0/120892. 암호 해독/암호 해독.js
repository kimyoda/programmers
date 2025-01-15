function solution(cipher, code) {
    // cipher가 string
    // code 배수번째 글자가 진짜다 return
    
    console.log("cipher : ", cipher);
    console.log("code : ", code);
    let result = "";
    // for문을 통해 code의 배수번째 글자만 순회
    // i는 code - 1로 시작, code만큼 건너뛰어 글자를 선택한다.
    for (let i = code - 1; i < cipher.length; i+= code) {
        // i를 result에 추가한다.
        result += cipher[i]; 
    }
    return result;
}