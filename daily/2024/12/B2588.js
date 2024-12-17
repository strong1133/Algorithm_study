// #2024-12-17 :: 백준 - 곱셈

function solution() {
  const fs = require("fs");

  // const input = fs.readFileSync("/Users/jsj/source/personal/study/Algorithm_study/daily/2024/12/test/b2588.txt").toString().split('\n');
  const input = fs.readFileSync("/dev/stdin").toString().split('\n');

  const A = parseInt(input[0]);
  const B = input[1];
  const bArr = B.split('').reverse();

  for(let b of bArr){
    console.log(A * b)
  }
  console.log(A * B)
}

solution();
