// #2023-12-20 :: 프로그래머스 - 배열 회전시키기

function solution(numbers, direction) {
  let answer = [];
  if (direction == "right") {
    answer = numbers.splice(0, numbers.length - 1);
    answer.unshift(numbers[0])
  } else {
    answer = numbers.splice(1, numbers.length);
    answer.push(numbers[0])
  }

  return answer;
}

console.log(solution([1, 2, 3], "right"));
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left"));
