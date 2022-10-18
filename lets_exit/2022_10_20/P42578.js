// 22-10-20 프로그래머스 - Let`s Exit 주간 알고리즘 > 위장

function solution(clothes) {
    return Object.values(clothes.reduce((obj, t)=> {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
    } , {})).reduce((a,b)=> a*(b+1), 1)-1;    
}

// function solution(arr) {
//     let res = 0;
//     let typeList = [];
//     let dressList = [];

//     for (let i of arr) {
//         typeList.push(i[1]);
//         dressList.push(i[0]);
//     }

//     let typeSet = new Set(typeList);

//     res = (typeSet.size * dressList.length);
//     if (typeSet.size > 1) {
//         res = res - (typeList.length - typeSet.size);
//     }
//     return res;
// }


console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]))
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]))


//  https://school.programmers.co.kr/questions/33347 참고하여 풀이 해야함