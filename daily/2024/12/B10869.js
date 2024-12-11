// #2024-12-11 :: 백준 - 사칙연산


function solution() {
const fs = require("fs");

const input = fs.readFileSync("/Users/jsj/source/personal/study/Algorithm_study/daily/2024/12/test/b10869.txt").toString().split(' ');
// const input = fs.readFileSync("/dev/stdin").toString().split(' ');


const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);
}


solution();