// #2024-10-10 :: 프로그래머스 - 영어가 싫어요
function solution(numbers) {

  let arr = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  let answer = "";

  for(let str of arr){
    numbers = numbers.replaceAll(str, arr.indexOf(str));
  }

  console.log(parseInt(numbers));
  answer = numbers;
  return answer;
}

console.log(solution("onetwothreefourfivesixseveneightnine"));
console.log(solution("onefourzerosixseven"));
