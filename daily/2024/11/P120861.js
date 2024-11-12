// #2024-11-12 :: 프로그래머스 - 캐릭터의 좌표

function solution(keyinput, board) {
  let answer = [0, 0];

  let maxX = Math.floor(board[0] / 2);
  let maxy = Math.floor(board[1] / 2);

  for (let key of keyinput) {
    let tempNum = 0;
    if (key == "left") {
      tempNum =  answer[0] - 1;
      if (tempNum < maxX * -1) {
        tempNum = maxX * -1
      }
      answer[0] = tempNum
      continue;
    }
    if (key == "right") {
      tempNum =  answer[0] + 1;
      if (tempNum > maxX) {
        tempNum = maxX
      }
      answer[0] = tempNum
      continue;
    }
    if (key == "up") {
      tempNum =  answer[1] + 1;
      if (tempNum > maxy) {
        tempNum = maxy
      }
      answer[1] = tempNum;
      continue;
    }
    if (key == "down") {
      tempNum =  answer[1] - 1;
      if (tempNum < (maxy*-1)) {
        tempNum = maxy*-1
      }
      answer[1] = tempNum;
      continue;
    }
  }

  return answer;
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));
console.log(solution( ["right", "right", "right", "right", "right", "left"], [9,5]));
