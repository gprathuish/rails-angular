var MyClass = (function () {
    var myField = 0;
    function MyClass() {        
        myField++;
    }
    MyClass.prototype.myMethod = function () {
        return myField;
    };   
    return MyClass;
}());
var myInstance = new MyClass();
console.log(myInstance.myMethod());
var myInstance2 = new MyClass();
var myInstance3 = new MyClass();
console.log(myInstance2.myMethod());

