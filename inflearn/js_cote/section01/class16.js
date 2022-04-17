// 2022-04-18 1-16강 <중복문자제거> 



function solution(str){         
    let tempSet = new Set(str);
    let res="";
    
    for(let i of tempSet){
        res += i
    }
    return res
}

// let str="study";
let str="ksekkset";
console.log(solution(str));