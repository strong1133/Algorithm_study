// 22-10-07 프로그래머스 - 코딩테스트 입문 Day 2 > 배열 두 배 만들기

function solution(arr) {
   const res =[];
   for(let i of arr){
      res.push(i*2)
   }


   return res
}



console.log(solution([1,2,3,4,5]))  