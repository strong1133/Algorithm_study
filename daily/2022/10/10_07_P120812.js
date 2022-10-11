// 22-10-07 프로그래머스 - 코딩테스트 입문 Day 3 > 최반값 구하기

function solution(arr) {
   
   let res=[];
   let maxCnt = 0;
   let maxNum = 0;
   for (let i of arr) {
      let tempMax = maxCnt;
      let cnt = 0;
      for (let j of arr) {
         if (i == j) {
            cnt++;
         }
      }
      tempMax = Math.max(cnt, tempMax)
      if (tempMax > maxCnt) {
         maxNum = i;
         maxCnt = tempMax;
      }


   }
   return maxNum


}



console.log(solution([1, 2, 2, 2, 3, 3, 3, 4]));
// console.log(solution([1,1,2,2]));  
