// 프로그래머스 - 옷가게 할인 받기

function solution(price) {
  let vat = 0;

  if (price >= 100000) vat = price * 0.05;

  if (price >= 300000) vat = price * 0.1;

  if (price >= 500000) vat = price * 0.2;

  return Math.floor(price - vat);
}

console.log(solution(100020));
