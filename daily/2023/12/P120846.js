// #2023-12-27 :: 프로그래머스 - 합성수 찾기

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    const arr = []; // 각 약수의 갯수를 담아줄 배열,, 이게 3개이상이 되면 answer += 1

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        arr.push(j);
        if (i / j !== j) arr.push(i / j);
      }
    }
    if (arr.length > 2) answer++;
  }

  return answer;
}

console.log(solution(10));
