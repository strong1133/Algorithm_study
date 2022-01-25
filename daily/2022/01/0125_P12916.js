// 22-01-25 프로그래머스 level01 문자열 내 p와 y의 개수

function solution(s) {
    let temp  = s.toLowerCase();
    let res = (temp.match(/p/g) || []).length === (temp.match(/y/g) || []).length ? true: false
    return res
}

let s = "pPoooyY"

console.log(solution(s));
