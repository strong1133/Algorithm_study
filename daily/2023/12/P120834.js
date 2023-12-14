// #2023-12-14 :: 프로그래머스 - 외계행성의 나이

function solution(age) {
  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

  let answer = "";

  for (let str of age.toString()) {
    answer += alphabetArray[str];
  }

  return answer;
}

console.log(solution(23));
