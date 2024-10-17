// #2024-10-17 :: 프로그래머스 - 배열의 유사도
function solution(s1, s2) {
    let answer = 0;

    for(let e of s1){
        if(s2.includes(e)){
            answer ++;
        }
    }

    return answer;
}


console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]))