// 2022-04-21 2-3강 <가위 바위 보>


const solution =(arr, arr2)=>{ 
    let res = []
    
    for (let i =0; i < arr.length; i++){
        if (arr[i] === arr2[i]){
            res.push('D')
        }
        else if (arr[i]===2 && arr2[i]===1){
            res.push('A')
        }else if(arr[i]===1 && arr2[i]===3){
            res.push('A')
        }else if(arr[i] === 3 && arr2[i] ===2){
            res.push('A')
        }else{
            res.push('B')
        }
    }
    return res
}


let arr= [2,3,3,1,3]
let arr2= [1,1,2,2,3]
console.log(solution(arr, arr2))