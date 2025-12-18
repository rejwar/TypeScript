type check = any extends unknown ? true : false;
type  check2 = any extends unknown ? true : false;
type check3 = null extends any ? true : false;
type check4 = undefined extends void ? true: false;
type check5 = [] extends Object ? true : false;
type check6 = function throwError(erroMessage:String) => {
    throw new Error(errMessage)
}



let strings: Object = ["a", "b"];