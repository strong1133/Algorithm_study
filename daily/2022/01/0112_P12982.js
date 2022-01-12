// 22-01-12 프로그래머스 level01 예산




function solution(arr, budget) {
   
    let sorted = arr.sort((a,b)=> a-b)
    let temp=budget;
    let res=0
    console.log(sorted)
    for(let i of sorted){   
        if(temp -i >= 0){
            temp -=i
            res+=1
        }
    }
    return res
}


let arr = [2,2,3,3]
let budget = 10
console.log(solution(arr, budget))


