// #2024-01-16 :: 프로그래머스 - 삼각형의 완성조건 (1)

function solution(sides) {
  let answer = 1;
  let sortedList = sides.sort((a,b)=> a-b);

  if(sortedList[0] + sortedList[1] <= sortedList[2]){
    answer = 2;
  }

  return answer;
}

console.log(solution([3, 6, 2]));
