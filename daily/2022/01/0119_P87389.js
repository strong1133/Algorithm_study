// 22-01-19 프로그래머스 level01 나머지가 1이 되는 수 찾기

function solution(n) {
    let temp=n;
    
    for (let i = 2; i < n; i++){
        if (n%i == 1){
            temp= Math.min(temp, i)
        }
    
    }
    return temp
}

let n = 10;

console.log(solution(n));
