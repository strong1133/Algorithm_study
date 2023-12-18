// #2023-12-19 :: 프로그래머스 - 가위 바위 보

function solution(rsp) {
  let answer = "";

  const zocbo = {
    "2":0,
    "0":5,
    "5":2
  };

  for(let str of rsp.toString()){
    answer+=zocbo[str]
  }

  return answer;
}

console.log(solution("205"));
