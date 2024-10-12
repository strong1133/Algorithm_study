// #2024-10-12 :: 프로그래머스 - 약수구하기
function solution(n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {

    if(n%i === 0 ){
      answer.push(i)
    }

  }

  return answer;
}

/// lastIndexOf 라는게 있더라...

console.log(solution(24));
console.log(solution(29));
