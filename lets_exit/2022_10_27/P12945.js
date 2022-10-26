// 22-10-27 프로그래머스 - Let`s Exit 주간 알고리즘 > 피보나치 수

function solution(n) {
    fib = [0, 1]
    for (let i = 2; i <= n; i++) {
        fib.push((fib[i-2] + fib[i-1]) % 1234567 )
    }
    return fib[n] 
}



console.log(solution(3))
console.log(solution(5))