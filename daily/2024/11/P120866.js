// #2024-11-20 :: 프로그래머스 - 안전지대
function solution(board) {
  let answer = 0;


  return answer;
}


// function solution(my_string) {
//   return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
// }


console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]));
console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]));
console.log(solution([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]));


[0, 0, 0, 0, 0]
[0, x, x, x, x]
[0, x, 1, 1, x]
[0, x, x, x, x]