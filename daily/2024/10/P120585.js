// #2024-10-31 :: 프로그래머스 - 머쓱이보다 키 큰 사람
function solution(array, height) {
  let answer = 0;

  array.push(height);
  array = array.sort((a,b) =>b-a);
  answer = array.indexOf(height);

  return answer;
}
console.log(solution([149, 180, 192, 170]	,167));
console.log(solution([180, 120, 140],190));