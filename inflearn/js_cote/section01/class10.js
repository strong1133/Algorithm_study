// 2022-04-12 1-10강 <문자 찾기 -> 갯수 반환> 



function solution(s, t){
    let prev  = s.length;
    s = s.split(t).join(''); 
    let after = s.length
    return prev - after

}


console.log(solution("COMPUTERPROGRAMMING", "R"));