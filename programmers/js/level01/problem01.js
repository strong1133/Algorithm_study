// 2022-04-19 프로그래머스  <숫자 문자열과 영단어> (81301)

function solution(s) {
    let ans =""

    let arr= ['zero','one','two','three','four','five','six','seven','eight','nine']


    
    for(let i in arr){
        s = s.replace(new RegExp( arr[i], "g"), i)
    }
    return s *1;
}



console.log(solution('23four5sixsix'))




// function solution(s) {
//     let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//     var answer = s;

//     for(let i=0; i< numbers.length; i++) {
//         let arr = answer.split(numbers[i]);
//         answer = arr.join(i);
//     }

//     return Number(answer);
// }