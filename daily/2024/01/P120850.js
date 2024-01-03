// #2024-01-02 :: 프로그래머스 - 문자열 정렬하기(1)

function solution(my_string) {

  const regex = /[a-zA-Z]/g;
  let str=  my_string.replaceAll(regex,"")
  let answer = str.split("").map(Number).sort((a,b)=> a-b)
  return answer;
}

console.log(solution("hi12392"));
