// 2022-04-17 1-15강 <가운데 문자 출력> 



function solution(str){         
    let l = parseInt(str.length /2)

    let res =''
    if(str.length %2 ===0){
        res = str[l] + str[l-1]
    }else{
        res = str[l]
    }
    
    return res
}

// let str="study";
let str="good";
console.log(solution(str));