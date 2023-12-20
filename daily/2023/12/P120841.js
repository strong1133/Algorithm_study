// #2023-12-20 :: 프로그래머스 - 점의 위치 구하기

function solution(dot) {
  let answer = 0;

  let x = dot[0];
  let y = dot[1];

  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x < 0 && y > 0) {
    return 2;
  } else {
    return 4;
  }

  return answer;
}

console.log(solution([2, 4]));


// 나이스한 코드
// function solution(dot) {
//     const [num,num2] = dot;
//     const check = num * num2 > 0;
//     return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
// }