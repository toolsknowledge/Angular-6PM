//Enum
//Enum is used to create the custom "types"
//enum is the "keyword"
/*
    Syntax
    ------
    enum customtype{
        constants
    }
*/
/*
    enum Holidays{
        DIWALI,
        PONGAL,
        DUSHERA,
        HOLI
    }
    console.log(
        Holidays.DIWALI,
        Holidays.PONGAL,
        Holidays.DUSHERA,
        Holidays.HOLI
    );          //0 1 2 3
*/
/*
    enum Enum1{
        CONST1 = 10,
        CONST2,
        CONST3,
        CONST4
    }
    console.log(
        Enum1.CONST1,
        Enum1.CONST2,
        Enum1.CONST3,
        Enum1.CONST4
    );          //10 11 12 13
*/
/*
enum Enum1{
    VAR1 = 10,
    VAR2 = 20,
    VAR3 = 30,
    VAR4 = 40
}
console.log( Enum1.VAR1,
             Enum1.VAR2,
             Enum1.VAR3,
             Enum1.VAR4 );      //10 20 30 40
*/
/*
    enum Enum1{

    };
    function fun_one():Enum1{
        return 100;
    }
    console.log( fun_one() );
*/
/*
    enum Enum1{
        CONST1 = 100,
        CONST2 = 200,
        CONST3 = 300,
        CONST4 = 400
    }
    function fun_one(arg1:Enum1, arg2:Enum1, arg3:Enum1 ):void{
        console.log( arg1, arg2, arg3 );
    }
    fun_one( Enum1.CONST1, Enum1.CONST2, Enum1.CONST3 );
*/
/*
    enum Enum1{
        KEY1 = "HELLO_1",
        KEY2 = "HELLO_2",
        KEY3 = "HELLO_3",
        KEY4 = "HELLO_4"
    }
    console.log(
        Enum1.KEY1,
        Enum1.KEY2,
        Enum1.KEY3,
        Enum1.KEY4
    );                  //HELLO_1 HELLO_2 HELLO_3 HELLO_4
*/
/*
    enum Enum1{
        KEY1 = "Hello_1",
        KEY2
    }
    //Enum member must have initializer.
*/
var Enum1;
(function (Enum1) {
    Enum1[Enum1["KEY1"] = 100] = "KEY1";
    Enum1["KEY2"] = "HELLO_1";
    Enum1[Enum1["KEY3"] = 200] = "KEY3";
    Enum1[Enum1["KEY4"] = 201] = "KEY4";
})(Enum1 || (Enum1 = {}));
console.log(Enum1.KEY1, Enum1.KEY2, Enum1.KEY3, Enum1.KEY4);
