// #2024-01-16 :: 프로그래머스 - 배열 원소의 길이

function solution(strlist) {
  let answer = [];
  strlist.map((e)=>answer.push(e.length))
  return answer;
}

console.log(solution(["We", "are", "the", "world!"]));
