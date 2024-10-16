// #2024-10-16 :: 프로그래머스 - 문자열 계산하기
function solution(my_string) {
        
  const arr = my_string.split(' ')
  
  var answer = arr[0]*1;
  
  for(let i =1 ; i < arr.length; i++){
      if(arr[i] ==='+'){
          answer += arr[i+1]*1
      }else if(arr[i]==='-'){
          answer -= arr[i+1]*1
      }
  }

  return answer;
}

// **eval()**을 사용하면 해커가 위험한 코드를 사용할 수 있습니다. 아래에 eval을 절대 사용하지 말 것
// var solution=eval 

console.log(solution("3 + 4"))
console.log(solution("1 + 1"))
console.log(solution("13 - 44"))