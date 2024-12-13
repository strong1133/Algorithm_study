// #2024-12-11 :: 백준 - 나머지

function solution() {
  const fs = require("fs");

//   const input = "5 8 4".split(' ');
  const input = fs.readFileSync("/dev/stdin").toString().split(' ');

  const A = parseInt(input[0]);
  const B = parseInt(input[1]);
  const C = parseInt(input[2]);

  console.log((A + B) % C);
  console.log(((A % C) + (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);
}

solution();
