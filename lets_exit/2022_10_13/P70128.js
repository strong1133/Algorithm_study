// 22-10-13 프로그래머스 - Let`s Exit 주간 알고리즘 > 내적


function solution(a,b) {
    let res = 0;
    for(let i in a){
        res += a[i]*b[i];
    }
    return res;
}



console.log(solution([1,2,3,4],[-3,-1,0,2]))
console.log(solution([-1,0,1],[1,0,-1]))