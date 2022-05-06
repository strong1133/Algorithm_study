// 2022-05-06 3-1강 <회문 문자열>


const solution =(str)=>{
    let ans = 'YES';

    str = str.toLowerCase();
    let len = str.length;

    for(let i=0; i< Math.floor(len/2); i++){
        if (str[i] != str[len -i -1]) return "No";
    }
    return ans;
}


let str = "goooG"
console.log(solution(str))