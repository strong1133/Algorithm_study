// 2022-04-27 2-6강 <격자판 최대합 >


const solution =(arr)=>{ 
    let ans = 0;
    let sum1, sum2 =0;
    let n = arr.length;

    for (let i =0; i < n; i++ ){
        sum1=sum2 = 0;

        for (let j =0; j < n; j++ ){
            sum1 += arr[i][j];
            sum2 += arr[j][i];
            ans = Math.max(ans, sum1, sum2)
        }
    }
    sum1=sum2 = 0;
    for(let i=0; i<n; i++){
        sum1+=arr[i][i];
        sum2+=arr[i][n-i-1];
        console.log(i, arr[i][n-i-1], sum2)
        ans = Math.max(ans, sum1, sum2)
    }  

    return ans;
}


let arr=[[10, 13, 10, 12, 15], 
        [12, 39, 30, 23, 11],
        [11, 25, 50, 53, 15],
        [19, 27, 29, 37, 27],
        [19, 13, 30, 13, 19]];
console.log(solution(arr))