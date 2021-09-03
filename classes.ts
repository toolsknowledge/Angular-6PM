//collection of variables and functions called as class
//we can create class by using "class" keyword
//we can create the object to the class by using "new" keyword
//recomended modifier for variables is "private"
//private members are accessable with in the "class"
//recomended modifier for functions is "public"
//we can access public members "anywhere" in application

/*
    class class_one{
        private sub_one:string;
        private sub_two:string;
        private sub_three:string;
        constructor(){
            this.sub_one = "Angular12";
            this.sub_two = "NodeJS";
            this.sub_three = "MongoDB";
        }
        public getSubOne():string{
            return this.sub_one;
        }
        public getSubTwo():string{
            return this.sub_two;
        }
        public getSubThree():string{
            return this.sub_three;
        }
    }
    let obj:class_one = new class_one();
    console.log(
        obj.getSubOne(),
        obj.getSubTwo(),
        obj.getSubThree()
    );
*/



/*
    class class_one{
        constructor(public arg1:string,
                    public arg2:string,
                    public arg3:string){}
    };
    let obj1:class_one = new class_one("Angular12","NodeJS","MongoDB");
    console.log( obj1.arg1, obj1.arg2, obj1.arg3 );             //Angular12 NodeJS MongoDB

    let obj2:class_one = new class_one("ReactJS","NodeJS","MongoDB");
    console.log( obj2.arg1, obj2.arg2, obj2.arg3 );             //ReactJS NodeJS MongoDB
*/

/*
    class class_one{
        private var_one:string = "Hello";
    }
    let obj:class_one = new class_one();
    obj.var_one;
    //Property 'var_one' is private and only accessible within class 'class_one'.
*/

/*
    class class_one{
        private var_one:string = "Hello";
        private fun_one():string{
            return this.var_one;
        }
        public fun_two():string{
            return this.fun_one();
        }
    }
    let obj:class_one = new class_one();
    console.log( obj.fun_two() );
*/


/*
    class class_one{
        private constructor(){}
    }
    new class_one();
    //Constructor of class 'class_one' is private and only accessible within the class declaration.
*/

/*
    class class_one{
        public var_one:string = "Hello_1";
    }
    class class_two extends class_one{
        public var_two:string = "Hello_2";
    }
    let obj:class_two = new class_two();
    console.log(
        obj.var_one, 
        obj.var_two
    );          //Hello_1 Hello_2
*/


/*
    class class_one{
        public fun_one():string{
            return "hello_1";
        }
    }
    class class_two extends class_one{
        public fun_two():string{
            return "hello_2";
        }
    }
    class class_three extends class_two{
        public fun_three():string{
            return "hello_3";
        }
    }
    let obj:class_three = new class_three();
    console.log(
        obj.fun_one(),
        obj.fun_two(),
        obj.fun_three()
    );
    //hello_1 hello_2 hello_3
*/


/*
    class class_one{
        constructor(public arg1:any){}
    }
    class class_two extends class_one{
        constructor(public arg1:any,public arg2:any){
            super(arg1);
        }
    }
    let obj:class_two = new class_two("Hello_1","Hello_2");
    console.log(
        obj.arg1, obj.arg2
    );  //Hello_1 Hello_2
*/


/*
    class class_one{
        static var_one:string = "Hello";
    };
    console.log(
        class_one.var_one
    );      //Hello
*/

/*
    class class_one{
        static var_one:string = "Hello_1";
        static fun_one():string{
            return "Hello_2";
        };
    };
    console.log(
        class_one.var_one,
        class_one.fun_one()
    );      //Hello_1 Hello_2
*/
/*
    class class_one{
        private constructor(){}
        static fun_one():any{
            return new class_one();
        }
        fun_two():string{
            return "Hello";
        };
    };
    console.log(
        class_one.fun_one().fun_two()
    );          //Hello
*/

/*
    //abstract classes
    abstract class class_one{
        fun_one():string{
            return "Hello_1";
        }
        abstract fun_two():string;
    };
    class class_two extends class_one{
        fun_two():string{
            return "Hello_2";
        }
    };
    let obj:class_two = new class_two();
    console.log(
        obj.fun_one(),
        obj.fun_two()
    );          //Hello_1 Hello_2
*/

/*
    abstract class class_one{
        abstract fun_one():string;
    }
    abstract class class_two extends class_one{
        fun_one():string{
            return "Hello_1";
        }
        abstract fun_two():string;
    };
    class class_three extends class_two{
        fun_two():string{
            return "Hello_2";
        }
    };
    let obj:class_three = new class_three();
    console.log( obj.fun_one(), obj.fun_two() );        //Hello_1 Hello_2
*/





























































































