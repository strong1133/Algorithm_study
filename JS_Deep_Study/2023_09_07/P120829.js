// 프로그래머스 - 각도기

function solution(angle) {
  let answer = 0;
  if(angle < 90) {
      answer = 1;
  } else if(angle == 90) {
      answer = 2;
  } else if(angle < 180) {
      answer = 3;
  } else if(angle == 180) {
      answer = 4;
  }
  return answer;
}
console.log(solution(70))


// 깔쌈한 답..!
// function solution(angle) {
//     return [0, 90, 91, 180].filter(x => angle>=x).length;
// }