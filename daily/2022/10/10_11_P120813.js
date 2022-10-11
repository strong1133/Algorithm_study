// 22-10-13 프로그래머스 - 코딩테스트 입문 Day 3 > 짝수는 싫어요

function solution(num1) {

   let res = [];

   for (let i = 1; i <= num1; i++) {
      i % 2 != 0 ? res.push(i) : null
   }

   return res

}



console.log(solution(10));
console.log(solution(15));
