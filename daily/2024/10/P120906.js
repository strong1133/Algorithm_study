// #2024-10-21 :: 프로그래머스 - 자릿수 더하기
function solution(n) {
  let answer = 0;
  let arr = n.toString().split("");

  for(let e of arr){
    answer +=(e*1);
  }

  return answer;
}

console.log(solution(1234));
