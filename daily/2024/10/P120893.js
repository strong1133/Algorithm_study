// #2024-10-10 :: 프로그래머스 - 대문자와 소문자
function solution(my_string) {

  // 대문자의 아스키 코드 범위 65~90

  let answer = "";

  for(let str of my_string){
    let code = str.charCodeAt();
    if(code >= 65 && code <=90){
        answer += str.toLowerCase();
    }else{
      answer += str.toUpperCase();
    }

  }

  return answer;
}

console.log(solution("cccCCC"));
console.log(solution("abCdEfghIJ"));
