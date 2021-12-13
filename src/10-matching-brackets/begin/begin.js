function matchingBrackets(str) {}

console.log(`${matchingBrackets("[hello][world]")} should be true`); // true
console.log(`${matchingBrackets("[hello]][world]")} should be false`); // false
console.log(`${matchingBrackets("[hello][world][]")} should be true`); // true
console.log(`${matchingBrackets("]hello]][world]")} should be false`); // false
console.log(`${matchingBrackets("[[[as;dfi")} should be false`); // false
