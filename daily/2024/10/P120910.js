// #2024-10-26 :: 프로그래머스 - 세균 증식
function solution(n, t) {
  let answer = n;

  for(let i = 1; i<=t; i++){
    answer *= 2;
  }

  return answer;
}

// 비트 연산
// function solution(n, t) {
//   return n << t;
// }


console.log(solution(2,10));
console.log(solution(7,15));
