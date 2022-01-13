// 22-01-13 프로그래머스 level01 나누어 떨어지는 숫자 배열

function solution(arr, div) {
    let res = [];
    for (let i of arr) {
        i % div == 0 ? res.push(i) : null;
    }

    if (res.length < 1) {
        res.push(-1);
    }

    return res.sort((a, b) => a - b);
}

let arr = [2, 36, 1, 3];
let div = 1;
console.log(solution(arr, div));
