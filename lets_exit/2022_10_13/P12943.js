// 22-10-13 프로그래머스 - Let`s Exit 주간 알고리즘 > 콜라츠 추측


function solution(num) {
    let cnt =0;
    let tempNum = num;

    if (num ==1) return 0

    while(tempNum != 1){
        cnt+=1;
        if (cnt>=500) return -1
        tempNum =  tempNum % 2 ==0? tempNum /= 2 : tempNum*3+1;
    }

    return cnt;

}



console.log(solution(1))
console.log(solution(6))
console.log(solution(16))
console.log(solution(626331))
