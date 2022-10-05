// 22-10-05 프로그래머스 - 코딩테스트 입문 Day 1 > 몫 구하기

function solution(num1, num2) {
    var ans = 0;
    
    ans = num1 /= num2;
    return Math.floor(ans);
}

console.log(solution(7,2)) 