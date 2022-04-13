// 2022-04-13 1-11강 <대문자 갯수> 



function solution(s){         
    let answer = 0
    
    for (x of s){
        if(x === x.toUpperCase()) answer++
    }
    return answer
}

let str="KoreaTimeGood";
console.log(solution(str));