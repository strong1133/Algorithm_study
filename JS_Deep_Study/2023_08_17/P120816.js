// 프로그래머스 - 피자 나눠 먹기 3탄

const main = (s,n) => {
  return Math.ceil(n / s) 
};

console.log(main(10));


// ceil 은 소수점 아래의 숫자가 있으면 소수점 아래를 다 버리고 정수부에 1을 더해주는 함수..