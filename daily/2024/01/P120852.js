// #2024-01-03 :: 프로그래머스 - 소인수분해

function solution(n) {
  let answer = [];
  let i = 2;
  while (n > 1) {
    if (n % i == 0) {
      answer.push(i);
      while (n % i == 0) {
        n /= i;
      }
    }
    i++;
  }

  return answer;
}

console.log(solution(12));
