// 2022-04-04 1-2강 <삼각형 판별하기> 


const solution =(a,b,c)=>{
    let tot, max;
    let ans = "YES"
    tot = a+b+c;
    max = Math.max(a,b,c);

    if(tot-max <=max) ans = "NO"

    return ans;
}

console.log(solution(6,7,11))
console.log(solution(13,33,17))