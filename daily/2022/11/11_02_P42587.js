// 22-11-02 프로그래머스 - 일일 코테 > 프린터

function solution(priorities, location) {
   var arr = priorities.map((priority, index) => {
      return {
         index: index, priority: priority
      };
   });

   
   var queue = [];

   while (arr.length > 0) {
      var firstEle = arr.shift();
      var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
      if (hasHighPriority) {
         arr.push(firstEle);
      } else {
         queue.push(firstEle);
      }
   }

   return queue.findIndex(queueEle => queueEle.index === location) + 1;
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));

