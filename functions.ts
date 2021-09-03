//particular business logic called as function
//functions are used to reuse the business logic
//we will define the functions with "function" keyword
/*
    Syntax:
    *******
    1) function definition

    2) function calling

    function definition
    *******************
    function functionname(arg1:datatype,arg2:datatype,arg3:datatype,......):returntype{
            business logic      
    }

    function calling
    ****************
    functionname(param1,param2,param3,......paramn);
*/

/*
    function fun_one():void{
        console.log( "Hello" );
    }
    fun_one()
*/

/*
    function fun_one():string{
        return "Hello";
    };
    console.log( fun_one() );               //Hello
*/

/*
    function fun_one(arg1:string,arg2:string,arg3:string):void{
        console.log( arg1, arg2, arg3 );
    }
    fun_one("Angular12","NodeJS","MongoDB");
    fun_one("ReactJS","NodeJS","MongoDB");
    fun_one("VueJS","Deno","CassandraDB");
*/


/*
    arrow functions
    ***************
       - The function without name called as anonymous function.

       - anonymous functions also called as arrow functions

       - ES6

       - "=>"

       Syntax
       ******
       1) function definition

       2) function calling

       function definition
       *******************
       let variablename = (arg1:datatype, arg2:datatype,arg3:datatype,.....argn:datatype):returntype=>{
           business logic
       }

       function calling
       ****************
       variablename(param1,param2,param3,......param n);

*/

/*
    let fun_one = ():void=>{
        console.log("Hello");
    };
    fun_one();                  //Hello
*/


/*
    let fun_one = ():any=>{
        return {"key1":"Hello_1"};
    };
    console.log( fun_one().key1 );      //Hello_1
*/

/*
    let fun_one = (arg1:string,arg2:string,arg3:string):void=>{
        console.log( arg1, arg2, arg3 );
    }
    fun_one("Angular12","NodeJS","MongoDB");            //Angular12 NodeJS MongoDB
*/

let fun_one = (arg1:any,arg2:any,arg3:any):void=>{
    console.log( arg1.key1, arg2.key1, arg3.key1 );
};
fun_one( {"key1":"Hello_1"}, {"key1":"Hello_2"}, {"key1":"Hello_3"} );
//Hello_1 Hello_2 Hello_3









































