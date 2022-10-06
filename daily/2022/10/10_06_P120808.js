// 22-10-06 프로그래머스 - 코딩테스트 입문 Day 2 > 분수의 덧셈

function solution(denum1, num1, denum2, num2) {
   const res = [];
   let child1 = denum1 * num2;
   let parent1 = num1 * num2;

   let child2 = denum2 * num1;

   let sumChild = child1 + child2;
   let sumParent = parent1;

   let yakSu = gcd(sumChild, sumParent);

   res.push(sumChild /= yakSu);
   res.push(sumParent /= yakSu);




   return res
}


const gcd = (a, b) => {
   let res = 0;
   if (b == 0){
      res = a;
   }else{
      res = gcd(b, a % b);
   }
   return res;

}

console.log(solution(1, 2, 3, 4)) 
console.log(solution(9, 2, 1, 3)) 
// console.log(gcd(5,10));