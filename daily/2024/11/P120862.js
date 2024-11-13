// #2024-11-13 :: 프로그래머스 - 최댓값 만들기 (2)
function solution(numbers) {
  let answer = numbers[0]*numbers[1];
  
  for(let n of numbers){
    for(let n2 of numbers){
      if(n == n2) continue;
      answer = Math.max(answer, (n*n2))
    }
  }

  return answer;
}


// function solution(numbers) {
//     numbers.sort((a, b) => a - b);
//     return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
// }

console.log(solution([1, 2, -3, 4, -5]));
console.log(solution([0, -31, 24, 10, 1, 9]));
console.log(solution([10, 20, 30, 5, 5, 20, 5]));
console.log(solution([-1, 0]));
