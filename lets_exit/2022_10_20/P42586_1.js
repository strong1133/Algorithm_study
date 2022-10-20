// 22-10-20 프로그래머스 - Let`s Exit 주간 알고리즘 > 기능 개발

function solution(progresses, speeds) {
    const answer = [];
    let days = 1; // 배포일
    let cnt = 0; // 오늘 배포되는 기능의 수
    let progress = 0; // 현재 기능의 작업 진행도

    while (progresses[0]) {

        // 100 = 93 + (1 * d ) => 100 = 93 + d =>  100 -93 = d : d = 7
        progress = progresses[0] + (speeds[0] * days);

        if (progress >= 100) {
            cnt++; // 배포 완료된 기능 개수 추가

            progresses.shift(); // 배열의 첫번쨰 제거
            speeds.shift();
        } else {
            if (cnt > 0) {
                answer.push(cnt);
            }
            days++;
            cnt = 0;
        }

    }
    answer.push(cnt);
    return answer;



}

console.log(solution([93, 30, 55], [1, 30, 5]))
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))