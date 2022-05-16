// 2022-04-28 2-7강 <봉우리>
const solution =(arr)=>{ 
    let ans =0;
    let n = arr.length;

    let dx = [-1,0,1,0];
    let dy = [0,1,0,-1];

    for(let i = 0; i <n; i++){
        for (let j =0; j<n; j++){
            let flag = 1;
            for(let k=0; k<4; k++){
                let nx = i +dx[k];
                let ny = j +dy[k];

                console.log(nx, ny);


                if (nx >= 0 && ny >=0 &&  nx<n && ny<n &&arr[nx][ny] >= arr[i][j]){
                    flag = 0;
                    break;
                }

            }
            if(flag) ans ++
        }
    }
    return ans
    

}


let arr=[[5, 3, 7, 2, 3], 
        [3, 7, 1, 6, 1],
        [7, 2, 5, 3, 4],
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2]];
console.log(solution(arr))