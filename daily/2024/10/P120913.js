// #2024-10-29 :: 프로그래머스 - 잘라서 배열로 저장하기
function solution(my_str, n) {
  let answer = [];

  let str="";
  for(let s of my_str){

    if(str.length === n){
      answer.push(str);
      str = "";
    }
    str += s;
  }

  if(str){
    answer.push(str)
  }

  return answer;
}

console.log(solution("abc1Addfggg4556b",6));
console.log(solution("abcdef123",3));