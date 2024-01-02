// #2024-01-02 :: 프로그래머스 - 모음 제거

function solution(my_string) {
  let charList = ["a","e","i","o","u"]
  
  var answer = my_string;

  charList.map((e)=> {
    answer = answer.replaceAll(e,"")
  })

  return answer;
}
console.log(solution("nice to meet you"));



// 와우
// function solution(my_string) {
//     return my_string.replace(/[aeiou]/g, '');
// }