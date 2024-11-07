// #2024-11-04 :: 프로그래머스 - 직사각형의 넓이 구하기

function solution(dots) {
  const result = Math.abs((dots[1][0] - dots[0][0]) * (dots[2][1] - dots[1][1]))
  return result
}

console.log(solution([1, 1, 2, 3, 4, 5],1));
console.log(solution([0, 2, 3, 4],1));