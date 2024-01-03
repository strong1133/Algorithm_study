// #2024-01-03 :: 프로그래머스 - 숨어있는 숫자의 덧셈 (1)

function solution(my_string) {

  const regex = /[a-zA-Z]/g;
  let str=  my_string.replaceAll(regex,"")
  let answer =0;
  str.split("").map((e)=>answer+=Number(e))
  return answer;
}

console.log(solution("aAb1B2cC34oOp"));
