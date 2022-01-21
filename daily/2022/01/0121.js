// 22-01-21 총 공부 시간 

const solution = (arr1, arr2)=>{
    
    let tot =0;

    for(let i in arr1){
        let cin = arr1[i];
        let cout = arr2[i];

        temp1 = cin.split(":")
        temp2 = cout.split(":")

        let startM = temp1[0]*60 + temp1[1]*1
        let endM = (temp2[0]*1 > 28) ? (21*60) :  temp2[0]*60 + temp2[1]*1

        tot += (endM-startM);
    }
    let ans = parseInt(tot/60) +"시간 " + tot%60 + "분"
    return ans
}

arr1 = ["7:51" ,"8:58", "8:56", "8:35", "9:00", "8:46", "8:56"];
arr2 = ["22:24" ,"21:51", "25:30", "29:10", "29:12", "22:15", "21:31"];
console.log(solution(arr1, arr2))

