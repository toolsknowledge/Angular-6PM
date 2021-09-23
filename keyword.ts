//this                  //public
//super                 //private
//static                //protected


/*
    class class_one{
        _sub1:string;
        _sub2:string;
        _sub3:string;


        fun_one(){
            this._sub1 = "Angular12";
            return this._sub1;
        }

        fun_two(){
            this._sub2 = "NodeJS";
            return this._sub2;
        }

        fun_three(){
            this._sub3 = "MongoDB";
            return this._sub3;
        }

    }

    let obj:class_one = new class_one();
    console.log(
        obj.fun_one(),
        obj.fun_two(),
        obj.fun_three()
    );
*/


/*
    class class_one{
        public arg1:any;
        public arg2:any;
        constructor(public param1:any,public param2:any){
            this.arg1 = param1;
            this.arg2 = param2;
        };
    };
    class class_two extends class_one{
        public arg3:any;
        public arg4:any;
        constructor(public p1:any,public p2:any,public p3:any,public p4:any){
            super(p1,p2);
            this.arg3 = p3;
            this.arg4 = p4;
        }
    }
    let obj:class_two = new class_two("Hello_1","Hello_2","Hello_3","Hello_4");
    console.log(
        obj.arg1,
        obj.arg2,
        obj.arg3,
        obj.arg4
    );                  //Hello_1 Hello_2 Hello_3 Hello_4
*/

/*
    class class_one{
        fun_one():any{
            return {"key1":"Hello_1"};
        }
    }
    class class_two extends class_one{
        fun_two():any{
            return super.fun_one();
        }
    }
    let obj:class_two = new class_two();
    console.log( obj.fun_two().key1 )
    //Hello_1
*/


/*
    //static
    //static keyword applicable to "variables" and "functions"
    //we can't initilize static members with "constructor"
    //we can't access by class "objects"
    class class_one{
        static var_one:string = "Hello_1";
        static fun_one():string{
            return this.var_one;
        }
    };
    console.log(
        class_one.var_one,
        class_one.fun_one()
    );
    let obj:class_one = new class_one();
    //obj.var_one;
    //obj.fun_one();
*/
























































