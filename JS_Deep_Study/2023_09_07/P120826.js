// 프로그래머스 - 특정문자 제거하기

function solution(my_string, letter) {
  return my_string.replaceAll(letter,"")
}

console.log(solution("abcdef","f"))