// 22-01-03 프로그래머스 level01 약수의 갯수와 덧셈 JS


function solution(left, right) {
    let ans = 0;
    for(let i = left; i<=right; i++){
        if(divider(i)){
            ans+=i
        }else{
            ans-=i
        }
    }
    return ans;
}


const divider = (n) =>{
    let d =[]
    for (let i=1; i<=n; i++){
        if (n%i == 0){
            d.push(i)
        }
    }
    if(d.length%2 ==0){
        return true
    }
    return false
}

solution(13, 17)


// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }