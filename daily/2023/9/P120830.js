// 프로그래머스 - 양꼬치

function solution(n, k) {
    let discount = Math.floor(n / 10);
    let nn = n;
    let kk = k-discount;
    if(kk <0 ) kk =0;
    let sum = (nn *12000) + (kk*2000)
    return sum;
}

console.log(solution(64,6))


