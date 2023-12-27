// #2023-12-27 :: 프로그래머스 - 주사위의 개수

function solution(box, n) {
  let answer = box.reduce((acc, cur) => acc * parseInt(cur / n), 1);
  return answer;
}

console.log(solution([1, 1, 1], 1));

// function solution(box, n) {
//   let [width, length, height] = box;
//   return (
//     Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
//   );
// }
