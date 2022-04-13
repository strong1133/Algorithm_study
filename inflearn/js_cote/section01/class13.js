// 2022-04-13 1-13강 <대소문자 변환> 



function solution(s){         
    let ans = ""
    for(x of s){
        if (x === x.toUpperCase()){
            ans += x.toLowerCase();
        }else{
            ans += x.toUpperCase();
        }
    }
    return ans
}

let str="StuDY";
console.log(solution(str));