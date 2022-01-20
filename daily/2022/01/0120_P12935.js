// 22-01-20 프로그래머스 level01 제일 작은 수 제거하기

function solution(arr) {
    arr.sort((a,b)=> b-a)
    arr.pop()
    arr.length <= 0 ? arr.push(-1):arr
    return arr
}

let arr = [4,3,2,1];

console.log(solution(arr));
