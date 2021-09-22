//this                  //public
//super                 //private
//static                //protected
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () {
        this._sub1 = "Angular12";
        return this._sub1;
    };
    class_one.prototype.fun_two = function () {
        this._sub2 = "NodeJS";
        return this._sub2;
    };
    class_one.prototype.fun_three = function () {
        this._sub3 = "MongoDB";
        return this._sub3;
    };
    return class_one;
}());
var obj = new class_one();
console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());
