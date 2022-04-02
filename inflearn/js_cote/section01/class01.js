// 2022-04-02 1-1강 <세 수 중 최솟값> 


const solution =(a,b,c)=>{
    let res;
    if (a+b+c <=300){
        
        res = a;
        if(res >b){
            res = b;
        }
        if(res > c){
            res =c
        }
    }
    return res
}

console.log(solution(2,12,4))