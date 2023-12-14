// #2023-12-14 :: 프로그래머스 - 배열 자르기

function solution(numbers, num1, num2) {
    var answer = [];
    answer =  numbers.slice(num1, num2 + 1)
    return answer;
}

console.log(solution([1, 2, 3, 4, 5], 1, 3))