// 22-10-13 프로그래머스 - Let`s Exit 주간 알고리즘 > 최댓값과 최솟값


function solution(str) {
    let arr = str.split(' ');
    let resArr = []
    arr.sort((a,b) =>a-b)
    
    resArr.push(arr[0])
    resArr.push(arr[arr.length -1])

    let resStr = resArr.join(' ')
    return resStr
}

console.log(solution("1 2 3 4"))
console.log(solution("-1 -2 -3 -4"))
console.log(solution("-1 -1"))