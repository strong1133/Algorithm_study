// 2022-04-07 1-7강 <10부제> 

const solution =()=>{

  // let day = 3
  let day = 0
  // let arr = [25, 23, 11, 47, 53, 17, 33];
  let arr = [12 ,20, 54, 30, 87, 91, 30];
  let res =0;

  for (let i of arr){
    let temp = i %10;
    if (day == temp) res+=1;

  }
  return res
}

console.log(solution());