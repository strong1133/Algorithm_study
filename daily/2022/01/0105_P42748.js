// 22-01-05 프로그래머스 level01 K번째 수 JS




function solution(array, commands) {
    var answer = [];
    for(let i=0; i<commands.length; i++){
        let list = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=> a-b)
        answer.push(list[commands[i][2]-1])
    }
    return answer;
}


let array = [1, 5, 2, 6, 3, 7, 4]
let commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
solution(array, commands)