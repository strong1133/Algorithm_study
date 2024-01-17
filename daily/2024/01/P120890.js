// #2024-01-17 :: 프로그래머스 - 가까운 수

function solution(array, n) {
  array.sort((a,b)=>a-b);

  let a = 0;
  let b = 0;
  let answer = [];

  for(let i of array){
    answer.push(Math.abs(n-i));
    a= Math.min(...answer);
  }

  return array[answer.indexOf(a)];
}

console.log(solution([3, 10, 28], 20));
