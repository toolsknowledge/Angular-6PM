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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//overriding
//overriding the parent class functionality with child class functionality called as function overriding
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.dbFun = function () {
        return "mysql data soon....!";
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.dbFun = function () {
        return "mongodb data soon....!";
    };
    return Child;
}(Parent));
var obj = new Child();
console.log(obj.dbFun());
var obj1 = new Parent();
console.log(obj1.dbFun());
var obj2 = new Child();
console.log(obj2.dbFun());
var obj3 = new Parent();
console.log(obj3.dbFun());
