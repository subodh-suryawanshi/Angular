// help command  =>tsc --help
//TypeScript ignores spaces, tabs, and newlines that appear in programs. 
//TypeScript is case-sensitive.
//Semicolons are optional in TypeScript.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//types in ts
//1.Any = super type() build-in-types+user-defined-types)
//=> 1.a = build-in-types(number,string.boolean,void,null,udefined)
//null and undefined =null and undefined are not the same. A variable initialized with undefined means that the variable has no value or object assigned to it while null means that the variable has been set to an object whose value is undefined
//=> 1.b = user-defined-types(Enumerations (enums), classes, interfaces, arrays, and tuple)
//type aanotation
var abc = 12;
//Type Assertion=TypeScript allows changing a variable from one type to another
//The syntax is to put the target type between < > symbols and place it in front
// of the variable or expression
var code = 123;
var employeeCode = code;
console.log(typeof (employeeCode)); //Output: number
//js 
//Inferred Typing=compiler will determine the type of the variable on the basis of the 
//value assigned to it.
var num = 2; // data type inferred as  number 
console.log("type of num " + typeof (num));
var nums = "12";
console.log("type of nums " + typeof (nums));
console.log(num);
var t = num + nums;
console.log(typeof (t));
//Interface
//Variable Scope(global,local scope)
var global_num = 12; //global variable 
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //class variable 
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //local variable 
    };
    Numbers.sval = 10; //static field 
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval); //static variable  
var obj1 = new Numbers();
console.log("Global num: " + obj1.num_val); //
//class,object,constructor,members,methods,super
//operators
/* Arithmetic operators(+,-,/,*..)
Logical operators(&&,||,!)
Relational operators(>,<,<=,>=,==,!=)
Bitwise operators(&,|..)
Assignment operators(=,+=,-=..)
Ternary/conditional operator(Test ? expr1 : expr2)
String operator (+)
Type Operator */
//Ternary/conditional operator(Test ? expr1 : expr2)
var num1 = 2;
var result = num1 > 0 ? "positive" : "non-positive";
//num1>0 =true
console.log(result);
//rest parameters
//Rest Parameters
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    /* for(i = 0;i<nums.length;i++) {
        sum = sum + nums[i];
     } */
    for (var _a = 0, nums_1 = nums; _a < nums_1.length; _a++) {
        var data_1 = nums_1[_a];
        sum = sum + data_1;
    }
    console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
//map in array =
//map() method creates a new array with the results of calling a provided function on every element in this array.
var numbers = [1, 4, 9, 16, 64, 126];
var roots = numbers.map(Math.sqrt);
console.log("roots is : " + roots);
//reduce method =reduce() method applies a function simultaneously against 
//two values of the array (from left-to-right) as to reduce it to a single value.
var total = [0, 1, 2, 3].reduce(function (a, b) { return a - b; });
console.log("total is : " + total);
//Array Destructuring
//Refers to breaking up the structure of an entity. 
//TypeScript supports destructuring when used in the context of an array.
var arr = [12, 13, 78];
//arr[0] =12
var x = arr[0], y = arr[1], z = arr[2];
console.log(x);
console.log(y);
console.log(z);
//Declaring a Two-Dimensional array
//var arr_name:datatype[][]=[ [val1,val2,val3],[v1,v2,v3] ]
var multi = [[1, 2, 3], [23, 24, 25]];
// var multi:number[][] =new array()
console.log(multi[0][0]); //1
console.log(multi[0][1]); //2
console.log(multi[0][2]); //3
console.log(multi[1][0]); //23
console.log(multi[1][1]); //24
console.log(multi[1][2]); //25
//Allows a function to return an array.
function disp() {
    return new Array("a", "b", "c", "d", "aa");
}
var nums1 = disp();
for (var i in nums1) {
    console.log(nums1[i]);
}
//You can pass to the function a pointer to an array by specifying the array's name without an index
var names = new Array("a", "b", "c", "d");
function disp1(arr_names) {
    for (var i = 0; i < arr_names.length; i++) {
        console.log(names[i]);
    }
}
disp1(names);
//tuples in ts
//We know that an array holds multiple values of the same data type 
//Arrays will not provide this feature, but TypeScript has a data type called Tuple to 
//achieve this purpose.
// A Tuple is an array which store multiple fields belong to different data types.
// TypeScript gives us a data type called tuple that helps to achieve such a purpose.
//Tuple values are individually called items
//Tuples are index based
//syntax =var tuple_name = [value1,value2,value3,…value n]
//syntax =>   let tuple_name = [val1,val2,val3, ...val n];  
var mytuple = [10, "Hello", true, 20];
//Accessing tuple Elements
console.log(mytuple[2]);
var arr6 = [1, 2, 3, 4, 5];
console.log(arr6.length);
//using loop on pop() || shift()
//splice(0,arr6.length)
//delete  not delete memory location only values
//
//Operations on Tuple(push and pop)
//push
mytuple.push("10001"); // append value to the tuple  from last
console.log(mytuple);
console.log(mytuple.length);
//pop
mytuple.pop(); // removed value to the tuple (last)
console.log(mytuple);
console.log(mytuple.length);
for (var _i = 0, mytuple_1 = mytuple; _i < mytuple_1.length; _i++) {
    var data_2 = mytuple_1[_i];
    console.log(data_2);
}
console.log(mytuple[0]);
console.log(typeof (mytuple));
//Update or Modify the Tuple Elements
mytuple[1] = 60;
console.log(mytuple);
//Clear the fields of a Tuple 
//delete data and memory block inside the tuples
mytuple = [];
console.log("tuples after clear" + mytuple.length);
//union type = to assign more than one type (string and number)
//any
//typescript union type
//Union types are a powerful way to express a value that can be one of the several types. 
//data types are combined using the pipe symbol (|)
//syntax=>Type1|Type2|Type3 
var data;
data = 12; //number
console.log("numeric value of data " + data);
data = "This is a string"; //string
console.log("string value of data " + data);
data = true;
console.log("boolean value of data " + data);
data = [1, 2, 3, 4, 5];
console.log("type  of data " + typeof (data));
//Union Type and function parameter
function show(name) {
    if (typeof name == "string") {
        console.log("data entered correct" + name);
    }
    else if (typeof name == "number") {
        console.log("data entered wrong" + name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
show(12); //number
show("mark"); //string
show(["a", "b", "c", "d"]); //array type
//Union Type and Array
var array_union;
var z;
array_union = [1, 2, 4];
console.log(array_union); //1,2,3
array_union.push(12);
console.log(array_union); //1,2,3,12
array_union = ["Mumbai", "Pune", "Delhi"];
array_union.push("ff");
console.log("**string array**");
for (z = 0; z < arr.length; z++) {
    console.log(array_union[z]);
}
array_union.push("abc");
console.log(array_union);
var customer = {
    firstNumber: 12,
    lastNumber: 200,
    add: function () { return 12; }
};
console.log("Customer Object ");
console.log(customer.firstNumber);
console.log(customer.lastNumber);
console.log(customer.add());
var employee = {
    firstNumber: 123,
    lastNumber: 123,
    add: function () { return 23; }
};
console.log("Employee  Object ");
console.log(employee.firstNumber);
console.log(employee.lastNumber);
//address as string 
var options = { houseNumber: "abc123", address: "nakshatara i-land" };
console.log(options.address);
//address as a string array 
options = { houseNumber: "test1", address: ["nakshtra", "-land"] };
console.log(options.address[0]);
console.log(options.address[1]);
//address as a function expression 
options = { houseNumber: "test1", address: function () { return "**Hello World**"; } };
var fn = options.address;
console.log(fn());
//class
var student = /** @class */ (function () {
    function student(student_id, college_name) {
        this.id = student_id;
        this.name = college_name;
    }
    student.prototype.add = function (a, b) {
        console.log(a + b + "constructor data" + "student id is " + this.id + "student name is " + this.name);
    };
    return student;
}());
var obj = new student(12, "manisha");
obj.add(12, 34);
var students = /** @class */ (function () {
    function students(id, num) {
        this.x = id;
        this.y = num;
    }
    students.prototype.add = function () {
        var t = this.x + this.y;
        console.log(t);
    };
    students.prototype.sub = function () {
        var t = this.x - this.y;
        console.log(t);
    };
    return students;
}());
//var obj2 = new students(12);//no error due to optional parameters
//Instantiating a class
var obj2 = new students(12, 12);
//accessing an attribute 
obj2.x;
console.log(obj2.x);
//accessing a function 
obj2.add();
obj2.sub();
//class
// constructor 
//constructor which is basically a method and that is called automatically when 
//we create an instance of that class.
//constructor is a reserved keyword in TypeScript
//constructor is actually a class method which can have parameters
//this keyword allow access to members of current object (student)
//Note: In TypeScript we can have only one constructor method into the class 
//— but we can have optional parameters in constructor
//constructor(a: number, b?:number, c?:number, d?:number)
//note=>Rule: when a parameter is made optional all other parameter at right side of 
//the parameter should also be optional — its a rule. 
//Look if b? is optional then c? and d? has to be optional.
//Access modifiers
//In TypeScript we have three keywords for access modifiers: public, private and protected
//By default everything public
//interface ,tuples=pop(),push(),[],union ,
//Class Inheritance
//TypeScript supports the concept of Inheritance.
//Inheritance is the ability of a program to create new classes from an existing class.
//A class inherits from another class using the ‘extends’ keyword
//Child classes inherit all properties and methods except private members and constructors from the parent class.
//Syntax=>
//class child_class_name extends parent_class_namets
//Types of Inheritance
//we can classify the inheritance into the five types. These are:
//=>Single Inheritance
//=>Multilevel Inheritance
//=>Multiple Inheritance
//=>Hierarchical Inheritance
//=>Hybrid Inheritance
//note:TypeScript supports only single and multilevel inheritance. 
//It doesn't support multiple, hierarchical, and hybrid inheritance.
//Single inheritance
var college = /** @class */ (function () {
    function college(a, b) {
        this.university_id = a;
        this.college_name = b;
    }
    return college;
}());
var Department = /** @class */ (function (_super) {
    __extends(Department, _super);
    function Department() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Department.prototype.disp = function () {
        console.log("university id of " + this.college_name + "is" + this.university_id);
    };
    return Department;
}(college));
var emp = /** @class */ (function (_super) {
    __extends(emp, _super);
    function emp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    emp.prototype.call = function () {
        console.log(this.college_name + "is" + this.university_id + "department" + this.dep_name);
    };
    return emp;
}(Department));
var salary = /** @class */ (function (_super) {
    __extends(salary, _super);
    function salary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.no_emp = 12;
        return _this;
    }
    salary.prototype.call = function () {
        console.log(this.college_name + "is" + this.university_id + "department" + this.dep_name + "no of emp" + this.no_emp);
    };
    return salary;
}(Department));
var obj3 = new Department(223, "MITAOE");
obj3.disp();
//multi-level inheritance
//When a derived class is derived from another derived class, 
//multilevel inheritance has more than one parent class like relation between Grandfather,
// Father, and Child
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log("Eating");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Barking");
    };
    return Dog;
}(Animal));
var BabyDog = /** @class */ (function (_super) {
    __extends(BabyDog, _super);
    function BabyDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BabyDog.prototype.weep = function () {
        console.log("Weeping");
    };
    return BabyDog;
}(Dog));
var obj4 = new BabyDog();
obj4.eat();
obj4.bark();
obj4.weep();
//example
var University = /** @class */ (function () {
    function University() {
    }
    University.prototype.total_colleges = function (a) {
        console.log(this.a = a);
    };
    return University;
}());
var colleges = /** @class */ (function (_super) {
    __extends(colleges, _super);
    function colleges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    colleges.prototype.total_department = function (a) {
        console.log(this.a = a);
    };
    return colleges;
}(University));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.total_emp = function (a) {
        console.log(this.a = a);
    };
    return Employee;
}(colleges));
var obj5 = new Employee();
obj5.total_colleges(10);
obj5.total_department(8);
obj5.total_emp(1000);
//Class inheritance and Method Overriding
//Method Overriding is a mechanism by which the child class redefines the superclass’s method.
var cal = /** @class */ (function () {
    function cal() {
    }
    cal.prototype.add = function () {
        console.log("add() from Parent called…");
    };
    return cal;
}());
var results = /** @class */ (function (_super) {
    __extends(results, _super);
    function results() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    results.prototype.add = function () {
        _super.prototype.add.call(this); //The super keyword is used to refer to the immediate parent of a class(cal)
        console.log("add() is from result class…");
    };
    return results;
}(cal));
var sub = /** @class */ (function (_super) {
    __extends(sub, _super);
    function sub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sub.prototype.add = function () {
        _super.prototype.add.call(this); //The super keyword is used to refer to the immediate parent of a class(results)
        console.log("add() is from sub class…");
    };
    return sub;
}(results));
var obj6 = new sub();
obj6.add();
//static Keyword
//static keyword can be applied to the data members of a class
//static variable retains its values till the program finishes execution.
// Static members are referenced by the class name.
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("The value of num is" + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; // initialize the static variable 
StaticMem.disp(); // invoke the static method
//instanceof operator
//The instanceof operator returns true if the object belongs to the specified type.
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj7 = new Person();
var isPerson = obj7 instanceof Person; //true
//var isPerson = obj7 instanceof University;  //false
console.log(" obj is an instance of Person " + isPerson);
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interests = interest;
        this.rebates = rebate;
    }
    return AgriLoan;
}());
var obj8 = new AgriLoan(10, 1);
console.log("Interest is : " + obj8.interests + " Rebate is : " + obj8.rebates);
var drummer = {};
drummer.age = 27;
drummer.hobby_name = "Drums";
console.log("Age:  " + drummer.age);
console.log("hobby_name:  " + drummer.hobby_name);
var Iobj = { v1: 12, v2: 23 };
console.log("value 1: " + this.v1 + " value 2: " + this.v2);
//object in ts
//An object is an instance which contains set of key value pairs
//syntax
/*
var object_name = {
   key1: “value1”, //scalar value
   key2: “value”,
   key3: function() {
      //functions
   },
   key4:[“content1”, “content2”] //collection
}; */
//
var person = {
    firstname: "Tom",
    lastname: "Hanks",
    sayHello: function () { console.log("function in obj"); } //add a function to the person object 
};
//access the object values 
console.log(person.firstname);
console.log(person.lastname);
//access the object function 
person.sayHello();
//Objects as function parameters
var person2 = {
    //object person2
    firstname: "Tom",
    lastname: "Hanks"
};
//function
var invokeperson = function (obj) {
    console.log("first name :" + obj.firstname);
    console.log("last name :" + obj.lastname);
};
invokeperson(person2); // pass object as a parameter
//TypeScript Enums
//It is used to define the set of named constants, i.e., a collection of related values. 
//TypeScript supports both numeric and string-based enums
//type of enum
//=>Numeric Enums
//=>String Enums
//=>Heterogeneous Enums//
//Numeric Enums
var Direction;
(function (Direction) {
    //it is not necessary to assign sequential values to enum members always.
    //if you not asign value then members are auto-incremented from that point
    // Up = 1,  
    //Up=3
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 3] = "Down";
    Direction[Direction["Left"] = 4] = "Left";
    Direction[Direction["Right"] = 5] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
//String Enums
//String enums are a similar concept to numeric enums
//each enum values are constant-initialized with a string literal,
//String enums do not have auto-incrementing behavior
var AppStatus;
(function (AppStatus) {
    AppStatus["ACTIVE"] = "ON";
    AppStatus["INACTIVE"] = "off";
    AppStatus["ONHOLD"] = "halt";
    AppStatus["ONSTOP"] = "pause";
})(AppStatus || (AppStatus = {}));
function checkStatus(status) {
    console.log(status);
}
checkStatus(AppStatus.ONSTOP);
//Heterogeneous Enums
//The heterogeneous enums are enums, which contains both string and numeric values
(function (AppStatus) {
    AppStatus["ACTIVEs"] = "Yes";
    AppStatus[AppStatus["INACTIVEs"] = 1] = "INACTIVEs";
    AppStatus[AppStatus["ONHOLDs"] = 2] = "ONHOLDs";
    AppStatus["ONSTOPs"] = "STOP";
})(AppStatus || (AppStatus = {}));
console.log(AppStatus.ACTIVE);
console.log(AppStatus.ONHOLD);
