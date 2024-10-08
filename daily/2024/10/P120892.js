// #2024-10-08 :: 프로그래머스 - 암호 해독
function solution(cipher, code) {
  let answer = "";


  for(let idx in cipher){
    let determine = parseInt(idx) +1;
    if(determine % code == 0){
      answer += cipher[idx];
    }


  }
  

  return answer;
}

console.log(solution("dfjardstddetckdaccccdegk", 4));
