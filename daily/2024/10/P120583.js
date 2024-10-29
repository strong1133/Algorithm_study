// #2024-10-30 :: 프로그래머스 - 중복된 숫자 개수

function solution(array, n) {
  let answer = 0;
  array.map((e) => e==n? answer++: null);
  return answer;
}

console.log(solution([1, 1, 2, 3, 4, 5],1));
console.log(solution([0, 2, 3, 4],1));