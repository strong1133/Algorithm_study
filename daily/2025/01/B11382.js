// #2025-01-07 :: 백준 - 꼬마 정민


function solution() {
const fs = require("fs");

// const input = fs.readFileSync("/Users/jsj/source/personal/study/Algorithm_study/daily/2024/11/test/b1000.txt").toString().split(' ');
const input = fs.readFileSync("/dev/stdin").toString().split(' ');


const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

console.log(A + B + C);
}


solution();