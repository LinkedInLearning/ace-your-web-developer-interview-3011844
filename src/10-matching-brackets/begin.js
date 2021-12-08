function matchingBrackets(str) {}

console.log(matchingBrackets("[hello][world]")); // true
console.log(matchingBrackets("[hello]][world]")); // false
console.log(matchingBrackets("[hello][world][]")); // true
console.log(matchingBrackets("]hello]][world]")); // false
console.log(matchingBrackets("[[[as;dfi")); // false
