// #2024-10-21 :: 프로그래머스 - n의 배수 고르기
function solution(n, numlist) {
  let answer = [];

  for(let num of numlist){
    if(num % n === 0){
        answer.push(num)
    }
  }

  return answer;
}

console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]));
