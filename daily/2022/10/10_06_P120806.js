// 22-10-06 프로그래머스 - 코딩테스트 입문 Day 2 > 두 수의 나눗셈

function solution(num1, num2) {
    var ans = 0;
    
    ans = (num1 /= num2) * 1000;
    return Math.floor(ans);
}

console.log(solution(3,2)) 