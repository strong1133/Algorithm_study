// 프로그래머스 - 피자 나눠 먹기 1탄

const main = (n) => {
  let maxPizza = 7;

  if (n <= maxPizza) return 1;

  let tempPizza = Math.floor(n / maxPizza);
  let reMain = n % maxPizza;

  if(reMain != 0) tempPizza += 1;
  return tempPizza 
};

main(15);


// return Math.ceil(n / 7)  그냥 이거 쓰면 된다.
// ceil 은 소수점 아래의 숫자가 있으면 소수점 아래를 다 버리고 정수부에 1을 더해주는 함수..