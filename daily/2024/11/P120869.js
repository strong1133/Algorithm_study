// #2024-11-23 :: 프로그래머스 - 외계어 사전

function solution(spell, dic) {
  let answer = 1;

    for(let str of dic){
        answer = 1;
        for(let s of spell){
            if(!str.includes(s)) answer = 2;
        }
        if(answer == 1) break;
    }

  return answer;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]));
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]));
