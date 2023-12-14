// #2023-12-14 :: 프로그래머스 - 진료순서 정하기

function solution(emergency) {
  var answer = [];

  let sorted = [...emergency];
  sorted.sort((a,b) => b-a);

  for (let e of emergency) {
    answer.push(sorted.indexOf(e) + 1);
  }

  return answer;
}

console.log(solution([3, 76, 24]));
