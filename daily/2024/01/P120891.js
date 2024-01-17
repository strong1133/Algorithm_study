// #2024-01-18 :: 프로그래머스 - 369게임

function solution(order) {
  let answer = 0;

  for(let i of order.toString().split(""))
    if(i == 3 || i == 6 || i == 9) answer++;
  return answer;
}
console.log(solution(29423));
