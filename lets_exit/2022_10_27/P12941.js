// 22-10-27 프로그래머스 - Let`s Exit 주간 알고리즘 > 최솟값 만들기


// 곱의 누적합을 최소로 만들려면 가장 큰수를 가장 작은수에 곱해야 한다.
function solution(a, b) {
    let sum=0;
    let arr1 = a.sort((a,b)=> b-a);
    let arr2 = b.sort((a,b)=> a-b);


    for(let i in arr1){
        sum += arr1[i]*arr2[i];
    }
    return sum
}

console.log(solution([1, 4, 2], [5, 4, 4]))
console.log(solution([1, 2], [3, 4]))