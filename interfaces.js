//interfaces
//when ever we know declarations but we don't know implementation then we will choose interfaces
//we will define interfaces by using "interface" keyword
//implementation provided by either "class" or "json"
/*
    interface interface1{
        sub_one:string;
        sub_two:string;
        sub_three:string;
    };
    let obj1:interface1 = {
        sub_one : "Angular12",
        sub_two : "NodeJS",
        sub_three : "MongoDB"
    };
    console.log(
        obj1.sub_one,
        obj1.sub_two,
        obj1.sub_three
    );      //Angular12 NodeJS MongoDB

    let obj2:interface1 = {
        sub_one : "ReactJS",
        sub_two : "NodeJS",
        sub_three : "MongoDB"
    }
    console.log(
        obj2.sub_one,
        obj2.sub_two,
        obj2.sub_three
    );      //ReactJS NodeJS MongoDB
*/
/*
    interface interface1{
        var_one:string;
        fun_one():string;
    }

    //json
    let obj1:interface1 = {
        var_one : "Hello_1",
        fun_one : ():string=>{
            return obj1.var_one;
        }
    }
    console.log(
        obj1.fun_one()
    );
    //class
    class class_one implements interface1{
        var_one:string = "Hello_1";
        fun_one():string{
            return "Hello_1"
        }
    };
    let obj:class_one = new class_one();
    console.log( obj.fun_one() );           //Hello_1
*/
/*
    interface DBInterface{
        oraConnection():any;
        mongoConnection():any;
        cassandraConnection():any;
    }
    let obj:DBInterface = {
        oraConnection : ():any=>{
            return "Oracle Connection Soon....!"
        },
        mongoConnection : ():any=>{
            return "MongoDB Connection Soon....!"
        },
        cassandraConnection : ():any=>{
            return "Cassandra Connection Soon....!"
        }
    };
    console.log(
        obj.oraConnection(),
        obj.mongoConnection(),
        obj.cassandraConnection()
    );
*/
/*
    interface interface1{
        sub_one:any;
    }

    interface interface2 extends interface1{
        sub_two:any;
    }

    interface interface3 extends interface2{
        sub_three:any;
    }

    let obj:interface3 = {
        sub_one : "Angular12",
        sub_two : "NodeJS",
        sub_three : "MongoDB"
    };
    console.log(
        obj.sub_one,
        obj.sub_two,
        obj.sub_three
    );      //Angular12 NodeJS MongoDB
*/
/*
    interface interface1{
        fun_one():any;
    }
    interface interface2 extends interface1{
        fun_two():any;
    }
    abstract class class_one implements interface2{
        fun_one():any{
            return "Hello_1";
        }
        abstract fun_two():any;
    }
    class class_two extends class_one{
        fun_two():any{
            return "Hello_2";
        }
    }
    let obj:class_two = new class_two();
    console.log(
        obj.fun_one(),
        obj.fun_two()
    );      //Hello_1 Hello_2
*/
var class_one = /** @class */ (function () {
    function class_one() {
        this.var_one = "Hello_1";
    }
    return class_one;
}());
var obj = new class_one();
console.log(obj.var_one);
