// #2024-01-16 :: 프로그래머스 - 중복된 문자 제거

function solution(my_string) {
  const uniqueStr = [...new Set(my_string)].join('');
  return uniqueStr;
}

console.log(solution("people"));
