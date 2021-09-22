//this                  //public
//super                 //private
//static                //protected
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

