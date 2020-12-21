/// <reference path="utility-functions.ts" />

const result = Utility.Fees.calculateLateFee(4)
console.log(result);
const res = Utility.maxBooksAllowed(30);
console.log(res);

import util = Utility.Fees;

console.log(util.calculateLateFee(10));
