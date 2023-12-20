// #2023-12-20 :: 프로그래머스 - 2차원으로 만들기

function solution(num_list, n) {
  let answer = [[]];

  let cnt = 0;
  let idx = 0;
  for (let i of num_list) {
    if (cnt == n) {
      cnt = 1;
      idx += 1;
    } else {
      cnt += 1;
    }

    if (answer[idx]) {
      answer[idx].push(i);
    } else {
      answer[idx] = [i];
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));

// 나이스한 코드
// function solution(num_list, n) {
//     var answer = [];

//     while(num_list.length) {
//         answer.push(num_list.splice(0,n));
//     }

//     return answer;
// }
