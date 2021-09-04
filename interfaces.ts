//when ever we don't know implementations, then we will choose "interfaces"
//we will define interfaces with "interface" keyword
//implementation provided by either json or classes


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
    }

    let obj2:interface1 = {
        sub_one : "VueJS",
        sub_two : "Go",
        sub_three : "CassandraDB"
    };
    console.log(
        obj1.sub_one, obj1.sub_two, obj1.sub_three
    );      //Angular12 NodeJS MongoDB
    console.log(
        obj2.sub_one, obj2.sub_two, obj2.sub_three 
    );      //VueJS Go CassandraDB
*/


interface interface1{
    fun_one():any;
    fun_two():any;
    fun_three():any;
}
let obj:interface1 = {
    fun_one : ():any=>{
        return "Hello_1";
    },
    fun_two : ():any=>{
        return "Hello_2";
    },
    fun_three : ():any=>{
        return "Hello_3";
    }
};
console.log(
    obj.fun_one(),
    obj.fun_two(),
    obj.fun_three()
);          //Hello_1 Hello_2 Hello_3

















