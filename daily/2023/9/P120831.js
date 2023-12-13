// 프로그래머스 - 짝수의 합

function solution(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }

  return sum;
}
console.log(solution(10));



// 공식
// function solution(n) {
//     var half = Math.floor(n/2);
//     return half*(half+1);
// }

5 * (5+ 1);