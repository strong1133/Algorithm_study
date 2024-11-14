// #2024-11-14 :: 프로그래머스 - 다항식 더하기
function solution(polynomial) {
  let answer = "";
  let qList = polynomial.split("+");

  let xSum = 0;
  let numSum = 0;

  for (let q of qList) {
    q = q.trim();
    if (q.includes("x")) {
      if (q === "x") {
        xSum += 1;
      } else {
        let xNum = parseInt(q.replace("x", ""));
        xSum += xNum;
      }
    } else {
      numSum += q * 1;
    }
  }

  if (xSum == 0) {
    answer = numSum.toString();
  } else if (numSum == 0) {
    if (xSum == 1) {
      answer = "x";
    } else {
      answer = `${xSum}x`;
    }
  } else {
    if (xSum == 1) {
      answer = `x + ${numSum}`;
    } else {
      answer = `${xSum}x + ${numSum}`;
    }
  }

  return answer;
}

console.log(solution("3x + 7 + x"));
console.log(solution("x + x + x"));
console.log(solution("2x"));
console.log(solution("1"));
console.log(solution("2x + 2x + x + 12"));
