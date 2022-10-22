// 22-10-20 프로그래머스 - Let`s Exit 주간 알고리즘 > 가장 큰 수

function solution(numbers) {

    let res = numbers.sort((a, b) => {


        return ('' + b + a) - ('' + a + b)
    }).join('')

    return res[0] ==0 ? '0': res;
}

console.log(solution([6, 10, 2]))
console.log(solution([3, 30, 34, 5, 9]))