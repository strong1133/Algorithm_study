// #2025-01-21 :: 백준 - 윤년

function solution() {
  const fs = require("fs");

  // const input = fs.readFileSync("/Users/jsj/source/personal/study/Algorithm_study/daily/2025/01/test/b2753.txt").toString().split(' ');
  const input = fs.readFileSync("/dev/stdin").toString().split(' ');

  const A = parseInt(input[0]);

  if (A % 4 == 0) {
    if (A % 100 != 0 || A % 400 == 0) {
      console.log(1);
    } else {
      console.log(0);
    }
  } else {
    console.log(0);
  }
}

solution();
