/*
    namespace accounts{
        export let name:string = "User_1";
        export let acc_no:number = 1234;
        export let acc_bal:number = 10000;
    }
*/
/*
    namespace namespace1{
        export function fun_one():any{
            return {"key1":"Hello_1"};
        };
        export function fun_two():any{
            return {"key1":"Hello_2"};
        };
        export function fun_three():any{
            return {"key1":"Hello_3"};
        }
    }
*/
var namespace1;
(function (namespace1) {
    var class_one = /** @class */ (function () {
        function class_one(arg1, arg2, arg3) {
            this.arg1 = arg1;
            this.arg2 = arg2;
            this.arg3 = arg3;
        }
        return class_one;
    }());
    namespace1.class_one = class_one;
})(namespace1 || (namespace1 = {}));
/*
///<reference path="accounts.ts" />
console.log(
    accounts.name,
    accounts.acc_no,
    accounts.acc_bal
);      //User_1 1234 10000
*/
/*
    /// <reference path="accounts.ts" />
    console.log(
        namespace1.fun_one(),
        namespace1.fun_two(),
        namespace1.fun_three()
    );
*/
///<reference path="accounts.ts" />
var obj = new namespace1.class_one("Hello_1", "Hello_2", "Hello_3");
console.log(obj.arg1, obj.arg2, obj.arg3);
