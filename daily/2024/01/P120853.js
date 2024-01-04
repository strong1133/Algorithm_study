// #2024-01-03 :: 프로그래머스 - 컨트롤 제트

function solution(s) {
  let answer =0;

  let arr = s.split(" ");
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 'Z'){
      answer -= Number(arr[i-1]);
    }else{
      answer += Number(arr[i]);
    }
  }
  return answer;
}

console.log(solution("1 2 Z 3"));
