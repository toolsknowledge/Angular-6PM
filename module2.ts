// import { sub_one } from "./module1";
// console.log( sub_one );  //Angular12

// import { var_one } from "./module1";
// import { var_two } from "./module1";
// import { var_three } from "./module1";
// console.log( var_one, var_two, var_three );

// import { var_one,var_two,var_three } from "./module1";
// console.log( var_one,var_two,var_three );

// import * as my_fun from "./module1";
// console.log(
//     my_fun.var_one,
//     my_fun.var_two,
//     my_fun.var_three
// );
//Hello_1 Hello_2 Hello_3

// import  var_one  from "./module1";
// console.log( var_one );


// import * as my_fun from "./module1";
// console.log(
//     my_fun.fun_one(),
//     my_fun.fun_two(),
//     my_fun.fun_three()
// );      //Hello_1 Hello_2 Hello_3


// import class_one from "./module1";
// let obj:class_one = new class_one();
// console.log( obj.sub_one, obj.sub_two, obj.sub_three );


import interface1 from "./module1";
let obj1:interface1 = {
    fun_one : ():any=>{
        return {"key1":"Hello_1"}
    },
    fun_two : ():any=>{
        return {"key1":"Hello_2"}
    },
    fun_three : ():any=>{
        return {"key1":"Hello_3"}
    }
};
console.log(
    obj1.fun_one(),
    obj1.fun_two(),
    obj1.fun_three()
);

class class_one implements interface1{
    fun_one():any{
        return {"key1":"Hello_1"};
    };
    fun_two():any{
        return {"key1":"Hello_2"}
    };
    fun_three():any{
        return {"key1":"Hello_3"}
    }
}
let obj2:class_one = new class_one();
console.log( obj2.fun_one(),
            obj2.fun_two(),
            obj2.fun_three() );


























