// #2025-02-11 :: 백준 - 사분면 고기

function solution() {
  const fs = require("fs");

//   const input = fs    .readFileSync(      "/Users/jsj/source/personal/study/Algorithm_study/daily/2025/02/test/b14681.txt"    )    .toString()    .split("\n");
const input = require('fs').readFileSync(0).toString().trim().split("\n");
  const A = parseInt(input[0]);
  const B = parseInt(input[1]);

  const AFlag = A > 0;
  const BFlag = B > 0;
  
  if(AFlag && BFlag){
    console.log(1)
  }else if(!AFlag && BFlag){
    console.log(2)
  }else if(AFlag && !BFlag){
    console.log(4)
  }else{
    console.log(3)
  }

}

solution();
