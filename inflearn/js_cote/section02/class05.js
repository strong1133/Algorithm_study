// 2022-04-26 2-5강 <등수 더하기 >


const solution =(arr)=>{ 
    let setArr = [...arr];
    setArr.sort((a,b)=>b-a)
    let res = []

    for (i of arr){
        res.push(setArr.indexOf(i) + 1)
    }

    return res
}


let arr= [87, 89, 92, 100, 76]
console.log(solution(arr))