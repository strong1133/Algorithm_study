// #2024-11-22 :: 프로그래머스 - 삼각형의 완성 조건(2)

function solution(sides) {
    let answer = [];
    let curMax = Math.max(...sides); // 현재 가장 긴변
    let curMin = Math.min(...sides); // 현재 가장 짧은변
    let curSum = sides.reduce(function(a, b) { return a + b; }, 0); // 현재 리스트의 요소 합
    // console.log(curSum); //2 

    for(let i =1; i<=1000000; i++){
        if(i >= curSum) break;

        if(i+curMin <= curMax) continue; // 새로운 변과 가장 짧은 변의 합이 가장 긴변보다 길지 않으면 삼각형이 될수 없음

        answer.push(i);
    }

    return answer.length;
}


// // 공식 풀이
// function solution(sides) {
//     return Math.min(...sides)*2-1
// }

console.log(solution([1, 2]));
console.log(solution([3, 6]));
console.log(solution([11, 7]));
console.log(solution([3,3]));

