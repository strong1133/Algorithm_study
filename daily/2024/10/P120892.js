// #2024-10-08 :: 프로그래머스 - 암호 해독

function solution(order) {
  let answer = 0;

  for(let i of order.toString().split(""))
    if(i == 3 || i == 6 || i == 9) answer++;
  return answer;
}
console.log(solution(29423));
