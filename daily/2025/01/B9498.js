// #2025-01-15 :: 백준 - 시험 성적

function solution() {
  const fs = require("fs");

//   const input = fs.readFileSync("/Users/jsj/source/personal/study/Algorithm_study/daily/2025/01/test/b9498.txt").toString();
  const input = fs.readFileSync("/dev/stdin").toString();


const score = parseInt(input);

  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}

solution();
