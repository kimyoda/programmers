// 1. 정수배열 num_list / 정수 n이 있다.
// 2. n번째(인덱스) 이후 원소들이 n번째까지 원소들 앞에 붙인 리스트 리턴
// function solution(num_list, n) {
//     // 원소를 재정립해라. n번째부터 시작하는
//     // 기존 num_list에서 기존배열을 n번째만큼 추가했다.

//     const truncatedNumList = num_list.splice(n);

//     const mergeNumList = truncatedNumList.concat(num_list);

//     return mergeNumList;
// }

function solution(num_list, n) {
    // 원소를 재정립해라. n번째부터 시작하는
    // 기존 num_list에서 기존배열을 n번째만큼 추가했다.

    // 스프레드 연산자 문법
    const copiedNumList = [...num_list];

    const changedOrderNumList = copiedNumList.splice(n);

    // 두개의 배열을 합치는 효율적인 스프레드 연산자를 활용추천, ...매개변수(컨벤션 지키기)
    changedOrderNumList.push(...copiedNumList);
    
    return changedOrderNumList;
}
