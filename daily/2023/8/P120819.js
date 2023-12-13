// 프로그래머스 - 아이스 아메리카노

function solution(money) {
  const answer = [];
  const coffee = 5500;

  let mok = Math.floor(money / coffee);
  let na = money % coffee;

  answer.push(mok);
  answer.push(na);
  return answer;
}

console.log(solution(5500));
