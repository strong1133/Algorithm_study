// #2023-12-15 :: 프로그래머스 - 개미 군단

function solution(hp) {
  let answer = 0;

  answer = Math.floor(hp / 5) + Math.floor((hp % 5) / 3) +  Math.floor((hp % 5) % 3);

  return answer;
}

console.log(solution(23));
