// #2023-12-19 :: 프로그래머스 - 구슬을 나누는 경우의 수

function solution(balls, share) {
  let answer = 0;

  answer = factorial(balls) / (factorial(balls-share) * factorial(share))

  return Math.round(answer);
}

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}


console.log(solution(3,2));



