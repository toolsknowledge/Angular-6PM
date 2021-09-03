//variables are used to store the data
//Ex. string, number, boolean, object,......
//var, let or const
//syntax:
/*
    var/let/const variablename:datatype = value;
*/
let sub_one:string = "Angular12";
let sub_two:string = 'NodeJS';
let sub_three:string = `MongoDB`;
let meanStack:string = `${sub_one} <==> ${sub_two} <==> ${sub_three}`;
console.log( meanStack );           //Angular12 <==> NodeJS <==> MongoDB


let decimalNum:number = 100;
let doubleNum:number = 100.12345;
let hexadecimalNum = 0x123ABC;
let octalNum = 0o123;
let binaryNum = 0b1010;
console.log( decimalNum, doubleNum, hexadecimalNum, octalNum, binaryNum );



//boolean
let flag:boolean = true;
console.log( flag );                //true



let str_arr1:string[] = ["Hello_1","Hello_2","Hello_3","Hello_4","Hello_5"];
let str_arr2:Array<string> = ["Welcome_1","Welcome_2","Welcome_3","Welcome_4","Welcome_5"];
str_arr1.forEach((element:string,index:number)=>{
    console.log( element, str_arr2[index] );
});


let num_arr1:number[] = [1,2,3,4,5];
let num_arr2:Array<number> = [10,20,30,40,50]; 
num_arr1.forEach((element:number,index:number)=>{
    console.log( element, num_arr2[index] );
});


let bool_arr1:boolean[] = [true,false,true,false];
let bool_arr2:Array<boolean> = [false,true,false,true];
bool_arr1.forEach((element:boolean,index:number)=>{
    console.log( element, bool_arr2[index] );
});


let globalDataType:any = "global data type"
console.log( globalDataType );


let obj:any = {
    "sub_one":"Angular12",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
}
console.log(
    obj.sub_one, obj.sub_two, obj.sub_three
);          //Angular12 NodeJS MongoDB


let products:any[] = [
    {"p_id":111,"p_name":"p_one","p_cost":10000},
    {"p_id":222,"p_name":"p_two","p_cost":20000},
    {"p_id":333,"p_name":"p_three","p_cost":30000},
    {"p_id":444,"p_name":"p_four","p_cost":40000},
    {"p_id":555,"p_name":"p_five","p_cost":50000}
];
products.forEach((element:any,index:number)=>{
    console.log( element.p_id, element.p_name, element.p_cost, index );
});



let v1:string | number = "Hello";
v1 = 1000;
console.log( v1 );              //1000




































