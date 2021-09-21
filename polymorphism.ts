/*
    //polymorphism
    //behaves like many called as polymorphism
    //1) function overloading
    //2) function overriding
    //function overloading
    //same function name, and same number of arguments with different datatypes called as function overloading
    class class_one{
        fun_one(arg1:string,arg2:string):void;
        fun_one(arg1:number,arg2:number):void;
        fun_one(arg1:string,arg2:number):void;
        fun_one(arg1:string|number, arg2:string|boolean):void;
        fun_one(arg1:any,arg2:any):void{
            console.log(arg1, arg2);
        }
    }
    let obj1:class_one = new class_one();
    obj1.fun_one("Hello_1","Hello_2");
    obj1.fun_one(100,100);
    obj1.fun_one(100,true);
*/




//overriding
//overriding the parent class functionality with child class functionality called as function overriding
class Parent{
    dbFun():string{
        return "mysql data soon....!";
    }
}
class Child extends Parent{
    dbFun():string{
        return "mongodb data soon....!";
    }
}
let obj:Child = new Child();
console.log( obj.dbFun() );             //mongodb data soon....!

let obj1:Parent = new Parent();
console.log( obj1.dbFun() );            //mysql data soon....!


let obj2:Parent = new Child();
console.log( obj2.dbFun() );            //mongodb data soon....!


let obj3:Child = new Parent();
console.log( obj3.dbFun() );            //mysql data soon....!






















