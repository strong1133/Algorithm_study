// #2025-01-07 :: 백준 - 꼬마 정민


function solution() {
const fs = require("fs");

// const input = fs.readFileSync("/Users/jsj/source/personal/study/Algorithm_study/daily/2025/02/test/b2884.txt").toString().split(' ');
const input = fs.readFileSync("/dev/stdin").toString().split(' ');


const A = parseInt(input[0]);
const B = parseInt(input[1]);

let _a = A;
let _b = B;

if (B < 45){
    if(A == 0){
        _a = 23
    }else{
        _a = A -1
    }
}

if (B < 45){
    _b = B+15
}else{
    _b = B-45
}

console.log(`${_a} ${_b}`)

}


solution();