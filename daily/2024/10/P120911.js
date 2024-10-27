// #2024-10-27 :: 프로그래머스 - 문자열 정렬하기(2)
function solution(my_string) {
  let answer = '';
  let str= my_string.toLowerCase();
  return str.split("").sort().join("");
}


console.log(solution("Bcad"));
console.log(solution("heLLo"));
