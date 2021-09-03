//variables are used to store the data
//Ex. string, number, boolean, object,......
//var, let or const
//syntax:
/*
    var/let/const variablename:datatype = value;
*/
var sub_one = "Angular12";
var sub_two = 'NodeJS';
var sub_three = "MongoDB";
var meanStack = sub_one + " <==> " + sub_two + " <==> " + sub_three;
console.log(meanStack); //Angular12 <==> NodeJS <==> MongoDB
var decimalNum = 100;
var doubleNum = 100.12345;
var hexadecimalNum = 0x123ABC;
var octalNum = 83;
var binaryNum = 10;
console.log(decimalNum, doubleNum, hexadecimalNum, octalNum, binaryNum);
//boolean
var flag = true;
console.log(flag); //true
var str_arr1 = ["Hello_1", "Hello_2", "Hello_3", "Hello_4", "Hello_5"];
var str_arr2 = ["Welcome_1", "Welcome_2", "Welcome_3", "Welcome_4", "Welcome_5"];
str_arr1.forEach(function (element, index) {
    console.log(element, str_arr2[index]);
});
var num_arr1 = [1, 2, 3, 4, 5];
var num_arr2 = [10, 20, 30, 40, 50];
num_arr1.forEach(function (element, index) {
    console.log(element, num_arr2[index]);
});
var bool_arr1 = [true, false, true, false];
var bool_arr2 = [false, true, false, true];
bool_arr1.forEach(function (element, index) {
    console.log(element, bool_arr2[index]);
});
var globalDataType = "global data type";
console.log(globalDataType);
var obj = {
    "sub_one": "Angular12",
    "sub_two": "NodeJS",
    "sub_three": "MongoDB"
};
console.log(obj.sub_one, obj.sub_two, obj.sub_three); //Angular12 NodeJS MongoDB
var products = [
    { "p_id": 111, "p_name": "p_one", "p_cost": 10000 },
    { "p_id": 222, "p_name": "p_two", "p_cost": 20000 },
    { "p_id": 333, "p_name": "p_three", "p_cost": 30000 },
    { "p_id": 444, "p_name": "p_four", "p_cost": 40000 },
    { "p_id": 555, "p_name": "p_five", "p_cost": 50000 }
];
products.forEach(function (element, index) {
    console.log(element.p_id, element.p_name, element.p_cost, index);
});
var v1 = "Hello";
v1 = 1000;
console.log(v1);
