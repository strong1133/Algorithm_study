// #2024-10-15 :: 프로그래머스 - 가장 큰 수 찾기
function solution(array) {
  let arr = [...array];
  array.sort((a,b)=> b-a);
  return [array[0], arr.indexOf(array[0]) ];
}

// function solution(array) {
//     let max = Math.max(...array);
//     return [max, array.indexOf(max)];
// }

console.log(solution([1, 8, 3]));
console.log(solution([9, 10, 11, 8]	));
