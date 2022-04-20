// 2022-04-20 2-2강 <보이는 학생>


const solution =(arr)=>{
    
    let max = arr[0]
    let cnt = 0;

    arr = new Set(arr);

    for (let i of arr){
        max = Math.max(max, i)
        if (max == i){
            cnt++
        }
    }
    return cnt
}


let arr= [130, 135, 148, 140, 145, 150, 150, 153]
console.log(solution(arr))