//namespaces
//namespaces will create the modules in local scope
//namespaces are internal modules
//we can create namespaces by using "namespace" keyword
// namespace namespace1{
//     export let var_one:string = "Hello_1";
// }
// namespace demoNameSpace{
//     export let var_one:string = "Angular12";
//     export let var_two:string = "NodeJS";
//     export let var_three:string = "MongoDB";
// }
// namespace testNameSpace{
//     export function fun_one():any{
//         return {"key1":"Hello_1"};
//     }
//     export function fun_two():any{
//         return {"key2":"Hello_2"}
//     }
//     export function fun_three():any{
//         return {"key3":"Hello_3"};
//     }
// }
// namespace classNameSpace{
//     export class demoClass{
//         constructor(public arg1:any,
//                     public arg2:any,
//                     public arg3:any){}
//     }
// }
// namespace interfaceNameSpace{
//     export interface interface1{
//         var_one:string;
//         var_two:string;
//         var_three:string;
//     }
// }
var namespace1;
(function (namespace1) {
    namespace1.obj = {
        "my_sql": my_sql(),
        "sql_server": sql_server(),
        "mongodb": mongodb()
    };
    function my_sql() {
        return "mysql connection soon...!";
    }
    function sql_server() {
        return "sql server connection soon...!";
    }
    function mongodb() {
        return "mongodb connection soon...!";
    }
})(namespace1 || (namespace1 = {}));
;
// /// <reference path="namespace1.ts" />
// console.log( namespace1.var_one );
// /// <reference path="namespace1.ts" />
// console.log(
//     demoNameSpace.var_one,
//     demoNameSpace.var_two,
//     demoNameSpace.var_three
// );  //Angular12 NodeJS MongoDB
// /// <reference path="namespace1.ts" />
// console.log(
//     testNameSpace.fun_one().key1,
//     testNameSpace.fun_two().key2,
//     testNameSpace.fun_three().key3
// );
// /// <reference path="namespace1.ts" />
// let obj1:classNameSpace.demoClass = new classNameSpace.demoClass("Hello_1","Hello_2","Hello_3");
// console.log(
//     obj1.arg1,
//     obj1.arg2,
//     obj1.arg3
// );
// let obj2:classNameSpace.demoClass = new classNameSpace.demoClass("Welcome_1","Welcome_2","Welcome_3");
// console.log(
//     obj2.arg1,
//     obj2.arg2,
//     obj2.arg3
// );
// /// <reference path="namespace1.ts" />
// let obj:interfaceNameSpace.interface1 = {
//     var_one : "Hello_1",
//     var_two : "Hello_2",
//     var_three : "Hello_3"   
// }
// console.log(
//     obj.var_one,
//     obj.var_two,
//     obj.var_three
// );
// class class_one implements interfaceNameSpace.interface1{
//     var_one:string = "Hello_1";
//     var_two:string = "Hello_2";
//     var_three:string = "Hello_3";
// }
// let obj1:class_one = new class_one();
// console.log(
//     obj1.var_one,
//     obj1.var_two,
//     obj1.var_three
// );
/// <reference path="namespace1.ts" />
console.log(namespace1.obj.my_sql, namespace1.obj.sql_server, namespace1.obj.mongodb);
