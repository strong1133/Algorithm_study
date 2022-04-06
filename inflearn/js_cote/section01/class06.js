// 2022-04-06 1-6강 <홀수> 

const solution =(a,b,c,d,e,f,g)=>{

  let arr = [a,b,c,d,e,f,g]
  let sum=0, min=100;

  for(i of arr){
    if (i %2 !=0){
      sum+=i
      min = Math.min(min, i)
    }
  }



  return [sum, min]
}

console.log(...solution(12,77,38,41,53,92,85));