// #2024-11-19 :: 프로그래머스 - 숨어 있는 숫자의 덧셈(2)
function solution(my_string) {
  let answer = 0;

  let prev = "";
  for (let str of my_string) {
    if (!isNaN(str)) {
      if (!isNaN(prev)) {
        let numStr = `${prev}` + `${str}`;
        answer = answer - prev * 1 + numStr * 1;
        prev = numStr;
        continue;
      } else {
        prev = str;
        answer += str * 1;
        continue;
      }
    }
    prev = str;
  }

  return answer;
}


// function solution(my_string) {
//   return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
// }


console.log(solution("aAb1B2cC34oOp"));
console.log(solution("1a2b3c4d123Z"));
