// #2025-03-04 :: 백준 - 주사위 세개

function solution() {
  const fs = require("fs");

  const input = fs.readFileSync("/Users/jsj/source/personal/study/Algorithm_study/daily/2025/03/test/b2480.txt").toString().split(' ');
//   const input = require('fs').readFileSync(0).toString().trim().split(" ");

  const A = parseInt(input[0]);
  const B = parseInt(input[1]);
  const C = parseInt(input[2]);

  const sett = new Set();
  sett.add(A);
  sett.add(B);
  sett.add(C);



  if (sett.size ==1 ) {
    console.log(10000 + sett.get() * 1000);
  } else if (sett.size == 3) {
    console.log(Math.max(A, B, C) * 100);
  }else{
    let _num = 0;
    if( A == B){
        _num= A;
    }else if (B == C){
        _num = C;
    } 
    console.log(1000 + (_num * 100));
  }
}

solution();
