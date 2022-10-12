// 22-10-13 프로그래머스 - Let`s Exit 주간 알고리즘 > 올바른 괄호


function solution(str) {
    const stack = [];

    for (let s of str) {
        // let s = str[idx];
        // if (idx == 0 && s == ')') return false

        if (s == ')') {
            if (stack.length <= 0) return false;
            stackPop(stack);
        } else {
            stackPush(s, stack);
        }
    }
    return stack.length > 0 ? false : true
}


const stackPush = (e, stack) => {
    stack.push(e);
}

const stackPop = (stack) => {
    stack.pop();
}

console.log(solution("()()"))
console.log(solution("((()()()))"))
console.log(solution("(()()"))
console.log(solution(")())()"))