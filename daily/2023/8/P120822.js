// 프로그래머스 - 짝수 홀수 개수

function solution(num_list) {
  let aCnt = 0; //짝수
  let bCnt = 0; //홀수

  for(let e of num_list){
    if(e%2 == 0 ){
      aCnt +=1;
    }else{
      bCnt +=1;
    }
  }

  let arr = [aCnt, bCnt]

  return arr
}

console.log(solution([1, 2, 3, 4, 5]));


// 간지나는 풀이!
// function solution(num_list) {
//     var answer = [0,0];

//     for(let a of num_list){
//         answer[a%2] += 1
//     }

//     return answer;
// }
