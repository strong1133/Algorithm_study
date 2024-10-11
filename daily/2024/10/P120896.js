// #2024-10-11 :: 프로그래머스 - 한 번만 등장한 문자
function solution(s) {
  let res = [];

  for(let c of s) if (s.indexOf(c)=== s.lastIndexOf(c)) res.push(c);
  

  return res.sort().join('');
}

/// lastIndexOf 라는게 있더라...

console.log(solution("abcabcadc"));
