// 프로그래머스 - 문자 반복 출력하기

function solution(my_string,n) {
  return [...my_string].map(e => e.repeat(n)).join("");
}

/// 스프래드 연산으로 list화 하여서 map같은 순회매서드를 사용하함.
/// * n 하면 NaN으로 나오니까 전용매서드 repeat 사용.

console.log(solution("jaron",3));
