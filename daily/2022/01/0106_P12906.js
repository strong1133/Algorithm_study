// 22-01-06 프로그래머스 level01 같은 숫자는 싫어 JS




function solution(arr) {
    let ans =[];
    for(let item of arr){
        if(ans[ans.length-1] != item){ ans.push(item) }
    }
    return ans
}


let arr = [1,1,3,3,0,1,1]
console.log(solution(arr))



//  let solution=_=>_.filter((i,$)=>i!=_[--$])