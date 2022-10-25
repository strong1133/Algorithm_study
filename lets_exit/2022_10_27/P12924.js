// 22-10-27 프로그래머스 - Let`s Exit 주간 알고리즘 > 숫자의 표현


// 연속한 자연수의 갯수는 홀수인 약수의 갯수와 같다
function solution(n) {
    let ans = 0;

    for (let i = 0; i <= n; i++) {
        if (n % i === 0 && i % 2 === 1) ans++;
    }
    return ans;
}

console.log(solution(15))


