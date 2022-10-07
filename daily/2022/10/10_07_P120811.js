// 22-10-07 프로그래머스 - 코딩테스트 입문 Day 3 > 중앙값 구하기

function solution(arr) {
   let sortedArr =[];
   sortedArr = arr.sort((a,b)=>{
      return a-b
   })
   
   let len = sortedArr.length;
   let midIdx = Math.floor(len/2)


   return sortedArr[midIdx]
}



console.log(solution([1,2,7,10,11]));  
// console.log(solution([9,-1,0]));  
