// 2022-04-06 1-4강 <1 부터 N까지 의 합> 

const solution =(a)=>{
    let res = 0;
    if (a > 20){
        return -1
    }
    for(let i =0; i<=a; i++){
        res += i
    }
    return res;
}

console.log(solution(6))
console.log(solution(10))