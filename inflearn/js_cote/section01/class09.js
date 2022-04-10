// 2022-04-11 1-9강 <A를 # 으로> 

function solution(strs){
    let ans ="";
    for(let str of strs){
        console.log(str)
        if (str =='A'){
            str = '#';
        }
        ans += str;
    }

    // let temp = strs.replace("A", "#")
    // console.log(temp)

    return ans
}


console.log(solution("BANANA"));