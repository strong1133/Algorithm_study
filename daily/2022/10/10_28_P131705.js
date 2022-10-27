// 22-10-28 프로그래머스 - 일일 코테 > 삼총사

function solution(number) {
   let sum = 0;
   for (let i = 0; i < number.length; i++) {
      for (let j = i + 1; j < number.length; j++) {
         for (let k = j + 1; k < number.length; k++)
            if (number[i] + number[j] + number[k] === 0)
               sum += 1;
      }
   }
   return sum;
}


console.log([-2, 3, 0, 2, -5]);
console.log([-3, -2, -1, 0, 1, 2, 3]);
