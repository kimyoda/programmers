// function solution(s1, s2) {
//   let answer = 0;
//   const s1Length = s1.length;
//   const s2Length = s2.length;
    
//   for (let i = 0; i < s1Length; i++) {
//     for (let j = 0; j < s2Length; j++) {
//       if (s1[i] === s2[j]) {
//           answer++;
//       }
//     }  
//   }
    
//   return answer;
// }

function solution(s1, s2) {
    // 문자열 배열 s1, s2
    // fitler를 통해 두 배열의 같은 값중 true만 새로운 배열로 리턴하고 include로 추가한다.
    const intersection = s1.filter((el) => s2.includes(el));
    return intersection.length;
}
