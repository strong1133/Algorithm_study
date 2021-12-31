// 21-12-31 프로그래머스 Level01 없는 숫자 더하기 => JS



function solution(numbers) {
    let temp = 45
    let sum = sumD(numbers)
    return temp - sum
    // return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

const sumD = (n) =>{
    let s=0;
    for (let i of n){
        console.log(i)
        s += i
    }
    return s
}


let arr = [1,2,3,4,6,7,8,0]
solution(arr)


