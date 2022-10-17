// 22-10-20 프로그래머스 - Let`s Exit 주간 알고리즘 > 폰켓몬


function solution(arr) {
    let tempSet = new Set(arr);
    return Math.min(tempSet.size, arr.length/=2)
}
    

console.log(solution([3,1,2,3]))
console.log(solution([3,3,3,2,2,4]))
console.log(solution([3,3,3,2,2,2]))