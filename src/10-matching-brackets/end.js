function matchingBracketsStack(str) {
  const chars = str.split("");

  // Top of the stack is the end of the array
  // stack.pop() to remove top item
  // stack.push() to add an item
  const stack = [];

  for (let char of chars) {
    if (char === "[") {
      stack.push(char);
    } else if (char === "]") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function matchingBrackets(str) {
  const charArray = str.split("");
  let counter = 0;
  for (let char of charArray) {
    if (char === "[") {
      counter++;
    } else if (char === "]") {
      if (counter <= 0) {
        return false;
      } else {
        counter--;
      }
    }
  }
  return counter === 0;
}

console.log(matchingBracketsStack("[hello][world]")); // true
console.log(matchingBracketsStack("[hello]][world]")); // false
console.log(matchingBracketsStack("[hello][world][]")); // true
console.log(matchingBracketsStack("]hello]][world]")); // false
console.log(matchingBracketsStack("[[[as;dfi")); // false
