// type arg1 = string;

// let sub_one:arg1 = "Angular12";
// let sub_two:arg1 = "NodeJS";
// let sub_three:arg1 = "MongoDB";
// console.log( sub_one, sub_two, sub_three );



// type arg1 = string | number | boolean;
// function fun_one(param1:arg1, param2:arg1, param3:arg1):void{
//     console.log( param1, param2, param3 );
// };
// fun_one("Hello_1",100,true);
// fun_one(100,100,100);
// fun_one(true,true,true);
// fun_one(100,100,100);


// class class_one{
//     readonly var_one:string;
//     constructor(arg1:string){
//         this.var_one = arg1;
//     }
// }
// let obj1:class_one = new class_one("Hello_1");
// console.log( obj1.var_one );
// obj1.var_one = "Welcome_1";


//never
function fun_one():never{
    while(true){
        console.log("Hello");
    }
}

fun_one();

























