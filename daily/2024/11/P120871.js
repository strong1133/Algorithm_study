// #2024-11-25 :: 프로그래머스 - 저주의 숫자 3

function solution(n) {
  let answer = 0;

  for(let i=1; i<=n; i++){
    answer +=1;
    while (answer % 3==0 || answer.toString().includes("3")){
      answer ++;
    }
  }

  return answer;
}


console.log(solution(15));
console.log(solution(40));
