// 22-01-18 프로그래머스 level01 두개 뽑아서 더하기

function solution(nums) {
    let set= new Set([])
    for (let i in nums){
        for(let j in nums){
            if (i != j){
                set.add(nums[i]+nums[j])
            }
        }
    }
    let res = Array.from(set).sort((a,b) => a-b)
    return res
}

let nums = [2,1,3,4,1]

console.log(solution(nums));
