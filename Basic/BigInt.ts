//bignit

const safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt);
const SafeIntPlusone = safeInt +1;
const SafeIntPluseTwo = safeInt +2;
console.log(SafeIntPluseTwo);
console.log(SafeIntPlusone);


let bigInt1: bigint = BigInt(1234);

let bigInt2: bigint = 123456789n;
console.log(bigInt1);