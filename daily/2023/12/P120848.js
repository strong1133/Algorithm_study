// #2023-12-28 :: 프로그래머스 - 팩토리얼

function solution(n) {
  let answer = 0;
  let acc = 1;

  for (let i = 1; i <= n; i++) {
    acc *= i;
    if(acc > n){
      break;
    }
    answer = i;

  }

  return answer;
}
console.log(solution(7));
