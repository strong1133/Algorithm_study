// 2022-04-19 2-1강 <큰수 출력하기>


const solution =(arr)=>{
    let res = [];

    res.push(arr[0])
    
    for(let i =1; i<arr.length; i++){

        if(arr[i-1] < arr[i]){
            res.push(arr[i])
        }
    }
    
    return res;
}


let arr=[7, 3, 9, 5, 6, 12]
console.log(solution(arr))