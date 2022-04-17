// 2022-04-18 1-17강 <중복단어제거> 



function solution(str){         
    let tempSet = new Set(str);
    let res= [...tempSet]
    
  
    return res
}

// let str="study";
let str=["good","time","good","time","student"]
console.log(solution(str));