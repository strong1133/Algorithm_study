// 2022-04-25 2-4강 <점수 계산>


const solution =(arr)=>{ 
    let pre=0;
    let score=0;
    
    for (i of arr){ 
        if (i ==0){
            pre = 0;
        }else{
            pre += i
        }
        score += pre;
    }
    return score
}


let arr= [1,0,1,1,1,0,0,1,1,0]
console.log(solution(arr))