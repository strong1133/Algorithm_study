// #2024-10-18 :: 프로그래머스 - 숫자 찾기
function solution(num, k) {
    let answer = -1;

    answer = num.toString().split("").indexOf(k.toString()) + 1

    if (answer=== 0) answer =  -1

    return answer;
}


console.log(solution(29183, 1))
console.log(solution(232443, 4))
console.log(solution(123456, 7))