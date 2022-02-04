// 22-02-04 프로그래머스 level01 음양더하기

function solution(absolutes, signs) {
    let res=0;
    for (a in absolutes){
        (signs[a]) ? res+=absolutes[a] : res-= absolutes[a]
    }
    return res
}

let absolutes = [4,7,12];
let signs = [true,false,true]

console.log(solution(absolutes, signs));
