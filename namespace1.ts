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



namespace namespace1{
    export let obj:any = {
        "my_sql" : my_sql(),
        "sql_server" : sql_server(),
        "mongodb" : mongodb()
    };
    function my_sql(){
        return "mysql connection soon...!";
    }
    function sql_server(){
        return "sql server connection soon...!";
    }
    function mongodb(){
        return "mongodb connection soon...!";
    }
};
















