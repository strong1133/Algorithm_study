// #2024-10-28 :: 프로그래머스 - 7의 갯수
function solution(array) {
  let answer = 0;
  
  let str = "";
  str = array.join("");
  let ans = str.split("").filter((e)=> e=='7');

  return ans.length;
}


console.log(solution([7, 77, 17]));
console.log(solution([10, 29]));
console.log(solution([77, 7]));
console.log(solution( [777, 77, 77, 1, 2, 3, 4, 5, 6, 7]));
