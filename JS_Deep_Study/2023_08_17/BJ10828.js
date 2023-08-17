// 백준 10828 스택

const main = () => {
//   const array = require("fs")
//     .readFileSync("./BJ10828_input.txt")
//     .toString()
//     .split("\n");
    const array = require("fs").readFileSync("/dev/stdin").toString().split("\n");

  const len = array.shift();
  const result = [];
  const stack = new Stack();

  for (let i = 0; i < len; i++) {
    switch (array[i]) {
      case "pop":
        result.push(stack.pop());
        break;

      case "size":
        result.push(stack.size());
        break;

      case "empty":
        result.push(stack.empty());
        break;

      case "top":
        result.push(stack.top());
        break;

      default:
        stack.push(array[i].split(" ")[1]);
        break;
    }
  }

  console.log(result.join("\n"));
};

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    if (this.size() == 0) {
      return -1;
    }
    return this.stack.pop();
  }

  size() {
    return this.stack.length;
  }

  empty() {
    return this.size() == 0 ? 1 : 0;
  }

  top() {
    if (this.size() == 0) {
      return -1;
    }
    return this.stack[this.stack.length - 1];
  }
}

main();
