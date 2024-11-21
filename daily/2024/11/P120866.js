// #2024-11-20 :: 프로그래머스 - 안전지대

function solution(b) {
    const directions = [[0,0],[0,1],[0,-1],[1,1],[1,0],[1,-1],[-1,-1],[-1,0],[-1,1]]
    let bombSet = new Set();

    for(let i = 0; i < b.length; i++) {
        for(let j = 0; j < b[i].length; j++) {
            if(b[i][j] == 1) {
                directions.forEach(el => {
                    let [nextX, nextY] = el;
                    [nextX, nextY] = [i+nextX, j+nextY];
                    if(nextX >= 0 && nextX < b.length && nextY >= 0 && nextY < b[i].length) {
                        bombSet.add(nextX+' '+nextY);
                    }
                })
            }
        }
    }
    return b.length * b[0].length - bombSet.size;
}




console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]));
console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]));
console.log(solution([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]));


[0, 0, 0, 0, 0]
[0, x, x, x, x]
[0, x, 1, 1, x]
[0, x, x, x, x]