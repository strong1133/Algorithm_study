// 2022-04-14 1-14강 <가장 긴 문자열> 



function solution(str){         
    let n = 5
    let max = 0
    let tempMax = 0
    let res=""

    for (let i =0; i<5; i++){
        tempMax = Math.max(max, str[i].length)

        if(max != tempMax){
            res = str[i]
        }

        max = tempMax
    }
    return res
}

let str=["teacher", "time", "beautifulss", "student", "beautiful", "good"];
console.log(solution(str));