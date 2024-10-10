// #2024-10-10 :: 프로그래머스 - 인덱스 바꾸기
function solution(my_string, num1, num2) {
  // 인덱스 변경시에는 문자열을 반드시 array로 바꾸고 해야함.
  // 문자열은 인덱스 참조는 가능하지만 인덱스 편집이 안됨.

  let answer = my_string;

  let str1 = my_string[num1];
  let str2 = my_string[num2];
  let splitArr = my_string.split("");

  splitArr[num1] = str2;
  splitArr[num2] = str1;

  return splitArr.join("");
}

///  구조 분해 할당 이용법
function solution2(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}

console.log(solution("hello", 1, 2));
console.log(solution("I love you", 3, 6));
