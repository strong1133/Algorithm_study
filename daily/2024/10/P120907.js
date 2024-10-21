// #2024-10-22 :: 프로그래머스 - OX 퀴즈
function solution(quiz) {
  let answer = [];

  for (let q of quiz) {
    let ans = 0;
    let arr = q.split("=");
    let question = arr[0];
    let solution = arr[1];

    const _question = question.split(" ");

    ans = eval(question);

    if(ans == solution){
      answer.push("O");
    }else{
      answer.push("X")
    }

  }

  return answer;
}

// function solution(quiz) {
//   var answer = [];
//   return quiz.map(t => {
//     const [calc, result] = t.split(' = ');
//     const sign = calc.includes('+') ? 1 : -1
//     const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');
//
//     return +a + (+b * sign) === +result ? 'O' : 'X'
//   });
// }

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]));

console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
);
