// #2023-12-20 :: 프로그래머스 - 공 던지기

function solution(numbers, k) {
  let answer = 0;
  let len = numbers.length;    
  answer  = numbers[2*(k-1)%len]
  return answer;
}
console.log(solution([1, 2, 3, 4,5,6], 5));
