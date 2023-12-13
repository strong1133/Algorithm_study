// 프로그래머스 - 피자 나눠 먹기 2탄

const main = (n) => {
  let pizzaBox = 6
  while(pizzaBox%n !== 0) {
      pizzaBox+=6
  } 
  return pizzaBox/6
};

console.log(main(10));
