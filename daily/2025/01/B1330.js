// #2025-01-13 :: 백준 - 두 수 비교하기


function solution() {
const fs = require("fs");

// const input = fs.readFileSync("/Users/jsj/source/personal/study/Algorithm_study/daily/2024/11/test/b1000.txt").toString().split(' ');
const input = fs.readFileSync("/dev/stdin").toString().split(' ');


const A = parseInt(input[0]);
const B = parseInt(input[1]);

if(A < B){
    console.log('<')
}else if(A > B){
    console.log('>')
}else{
    console.log('==')
}

}


solution();