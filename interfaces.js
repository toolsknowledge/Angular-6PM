//when ever we don't know implementations, then we will choose "interfaces"
//we will define interfaces with "interface" keyword
//implementation provided by either json or classes
var obj = {
    fun_one: function () {
        return "Hello_1";
    },
    fun_two: function () {
        return "Hello_2";
    },
    fun_three: function () {
        return "Hello_3";
    }
};
console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());
