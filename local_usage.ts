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
let obj:namespace1.class_one = new namespace1.class_one("Hello_1","Hello_2","Hello_3");
console.log( obj.arg1, obj.arg2, obj.arg3 );
//Hello_1 Hello_2 Hello_3







