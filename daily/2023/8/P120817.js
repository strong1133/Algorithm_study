// 프로그래머스 - 배열의 평균값

const main = (numbers) => {
  let sum = 0;
  for(let n of numbers){
    sum += n;
  }
  let avg = sum / numbers.length;
 
  return  avg.toFixed(1)
};

console.log(main([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]));

//  var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
// reduce 고차 배열 매서드를 통해서 순회를 돌면서 값을 누적할 수 있다.
