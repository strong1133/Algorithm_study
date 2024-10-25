// #2024-10-25 :: 프로그래머스 - 제곱수 판별하기
function solution(n) {
  return  Number.isInteger(Math.sqrt(n)) ? 1 :2;
}
console.log(solution(144));
console.log(solution(976));
