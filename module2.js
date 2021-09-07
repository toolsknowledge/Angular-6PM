"use strict";
// import { sub_one } from "./module1";
// console.log( sub_one );  //Angular12
exports.__esModule = true;
var obj1 = {
    fun_one: function () {
        return { "key1": "Hello_1" };
    },
    fun_two: function () {
        return { "key1": "Hello_2" };
    },
    fun_three: function () {
        return { "key1": "Hello_3" };
    }
};
console.log(obj1.fun_one(), obj1.fun_two(), obj1.fun_three());
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () {
        return { "key1": "Hello_1" };
    };
    ;
    class_one.prototype.fun_two = function () {
        return { "key1": "Hello_2" };
    };
    ;
    class_one.prototype.fun_three = function () {
        return { "key1": "Hello_3" };
    };
    return class_one;
}());
var obj2 = new class_one();
console.log(obj2.fun_one(), obj2.fun_two(), obj2.fun_three());
