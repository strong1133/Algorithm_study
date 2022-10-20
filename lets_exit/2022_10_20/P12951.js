// 22-10-20 프로그래머스 - Let`s Exit 주간 알고리즘 > 기능 개발

function solution(str) {
    let tempStrList = str.toLowerCase().split(' ');
    let resStrList = [];

    for (let s of tempStrList) {
        s = s.replace(/^[a-z]/, char => char.toUpperCase());
        resStrList.push(s)
    }

    return resStrList.join(' ')
}

console.log(solution("3people unFollowed me"))
console.log(solution("for the last week"))