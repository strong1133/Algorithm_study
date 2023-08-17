// 프로그래머스 - 전화번호 목록

function solution(phone_book) {
  let answer = true;
  let arr = [...phone_book];

  arr = arr.sort();

  for(let i = 0; i < arr.length - 1; i++) {
      let nextString = arr[i+1].substr(0, arr[i].length);
      if (arr[i] === nextString){
          return false;
      }
  }

  return answer;
}

console.log(solution(		["123", "456", "789"]));



// function solution(phoneBook) {
//     return !phoneBook.sort().some((t,i)=> {
//         if(i === phoneBook.length -1) return false;

//         return phoneBook[i+1].startsWith(phoneBook[i]);        
//     })
// }
