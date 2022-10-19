// 22-10-20 프로그래머스 - Let`s Exit 주간 알고리즘 > 기능 개발

function solution(arr, speed) {
    let queue = arr;
    let queue2 = speed;

    let res = [0];
    let day = 0;
    let cnt = 0;
    while (queue.length >0) {
     
    
        let tempWork = queuePop(queue);
        let tempSpeed = queuePop(queue2);

        let sum = tempSpeed + tempWork;

        if (queue2.length == 0){
            day +=1;
            cnt = 0;
        }

        if(sum >=100){
            cnt += 1;
            res[day] = res[day]+cnt;
        }else{
            queuePush(sum, queue);
            queuePush(tempSpeed, queue2);
        }

    

    }

    return res;

}

const queuePop = (queue) => {
    let element = queue[queue.length-1];
    queue.pop();
    return element;
}

const queuePush = (e, queue) => {
    queue.unshift(e);
}

console.log(solution([93, 30, 55], [1, 30, 5]))
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))