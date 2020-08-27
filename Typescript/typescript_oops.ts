// help command  =>tsc --help
//TypeScript ignores spaces, tabs, and newlines that appear in programs. 
//TypeScript is case-sensitive.
//Semicolons are optional in TypeScript.



//types in ts

//1.Any = super type() build-in-types+user-defined-types)
//=> 1.a = build-in-types(number,string.boolean,void,null,udefined)
//null and undefined =null and undefined are not the same. A variable initialized with undefined means that the variable has no value or object assigned to it while null means that the variable has been set to an object whose value is undefined
//=> 1.b = user-defined-types(Enumerations (enums), classes, interfaces, arrays, and tuple)

//type aanotation

var abc:number =12;



//Type Assertion=TypeScript allows changing a variable from one type to another
//The syntax is to put the target type between < > symbols and place it in front
// of the variable or expression

let code: any = 123; 
let employeeCode = <number> code; 
console.log(typeof(employeeCode)); //Output: number

//js 






//Inferred Typing=compiler will determine the type of the variable on the basis of the 
//value assigned to it.
var num = 2;    // data type inferred as  number 
console.log("type of num "+typeof(num)); 
var nums = "12";
console.log("type of nums "+typeof(nums)); 
console.log(num);

var t =num +nums;

console.log(typeof(t));

//Interface



//Variable Scope(global,local scope)
var global_num = 12          //global variable 
class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var obj1 = new Numbers(); 
console.log("Global num: "+obj1.num_val)  //




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
var num1:number = 2 
var result = num1 > 0 ?"positive":"non-positive" 

//num1>0 =true
console.log(result)



//rest parameters

//Rest Parameters
function addNumbers(...nums:number[]) {  
   var i;   
   var sum:number = 0; 
   
  /* for(i = 0;i<nums.length;i++) { 
      sum = sum + nums[i]; 
   } */
   for(let data of nums){
    sum = sum + data; 
   }
   console.log("sum of the numbers",sum) 
} 
addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)

//map in array =
//map() method creates a new array with the results of calling a provided function on every element in this array.
var numbers = [1, 4, 9,16,64,126]; 
var roots = numbers.map(Math.sqrt); 
console.log("roots is : " + roots );
//reduce method =reduce() method applies a function simultaneously against 
//two values of the array (from left-to-right) as to reduce it to a single value.

var total = [0, 1, 2, 3].reduce(function(a, b){ return a -b; }); 
console.log("total is : " + total );

//Array Destructuring
//Refers to breaking up the structure of an entity. 
//TypeScript supports destructuring when used in the context of an array.

var arr:number[] = [12,13,78] 
//arr[0] =12
var[x,y,z] = arr 
console.log(x) 
console.log(y)
console.log(z)

//Declaring a Two-Dimensional array

//var arr_name:datatype[][]=[ [val1,val2,val3],[v1,v2,v3] ]
var multi:number[][] = [[1,2,3],[23,24,25]] 

// var multi:number[][] =new array()


console.log(multi[0][0]) //1
console.log(multi[0][1]) //2
console.log(multi[0][2]) //3
console.log(multi[1][0]) //23
console.log(multi[1][1]) //24
console.log(multi[1][2])//25



//Allows a function to return an array.

function disp():string[] { 
    return new Array("a","b","c","d","aa") 
 } 
  
 var nums1:string[] = disp() 
 for(var i in nums1) { 
    
    console.log(nums1[i]) 
 }


 //You can pass to the function a pointer to an array by specifying the array's name without an index
 var names:string[] = new Array("a","b","c","d")  

function disp1(arr_names:string[]) {
   for(var i = 0;i<arr_names.length;i++) { 
      console.log(names[i]) 
   }  
}  
disp1(names)

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

var mytuple = [10,"Hello",true,20];
//Accessing tuple Elements
console.log(mytuple[2]);


var arr6 =[1,2,3,4,5];
console.log(arr6.length);
//using loop on pop() || shift()
//splice(0,arr6.length)
//delete  not delete memory location only values

//


//Operations on Tuple(push and pop)
//push
mytuple.push("10001");   // append value to the tuple  from last
console.log(mytuple) ;
console.log(mytuple.length) ;
//pop
mytuple.pop();   // removed value to the tuple (last)
console.log(mytuple) ;
console.log(mytuple.length) ;


for (let data of mytuple){
    console.log(data);   
}
console.log(mytuple[0]);
console.log(typeof(mytuple));

//Update or Modify the Tuple Elements

mytuple[1] = 60;

console.log( mytuple);


//Clear the fields of a Tuple 

//delete data and memory block inside the tuples

mytuple = [];  
console.log("tuples after clear"+ mytuple.length);  

//union type = to assign more than one type (string and number)

//any


//typescript union type

//Union types are a powerful way to express a value that can be one of the several types. 
//data types are combined using the pipe symbol (|)

//syntax=>Type1|Type2|Type3 

var data:string|number|boolean |number[]
data = 12 //number
console.log("numeric value of data "+data) 
data = "This is a string" //string
console.log("string value of data "+data)

data = true;
console.log("boolean value of data "+data)

data =[1,2,3,4,5]

console.log("type  of data "+typeof(data))


//Union Type and function parameter

function show(name:string|string[]|number) {
   
   

   if(typeof name == "string") { 
      console.log("data entered correct" +name) 
   } else if(typeof name == "number"){ 
      console.log("data entered wrong" +name) 
   }
   else{
      var i;
      for(i = 0;i<name.length;i++) { 
         console.log(name[i])
      } 
   }

      
   } 
show(12)//number
show("mark") //string

show(["a","b","c","d"])//array type



//Union Type and Array

var array_union:number[]|string[]; 
var z:number; 
array_union = [1,2,4] 
console.log(array_union)  //1,2,3
array_union.push(12);



console.log(array_union)//1,2,3,12


array_union = ["Mumbai","Pune","Delhi"] 
array_union.push("ff");
console.log("**string array**")  

for(z = 0;z<arr.length;z++) { 
   console.log(array_union[z]) 
} 

array_union.push("abc");
console.log(array_union)



//typescript Interfaces

//Interfaces define properties, methods, and events, which are the members of the interface

//Interfaces contain only the declaration of the members.
//To reuse the declaration across objects we can define it as an interface

//syntax
interface interface_name { 
}
//example
interface Calculation { 
   
   firstNumber:number, 
   lastNumber:number, 
   add: ()=>number ,
   
  
} 

var customer:Calculation = { 
   firstNumber:12,
   lastNumber:200, 
  add: () =>{return 12} 
} 

console.log("Customer Object ") 
console.log(customer.firstNumber) 
console.log(customer.lastNumber) 
console.log(customer.add())  

var employee:Calculation = { 
   firstNumber:123,
   lastNumber:123, 
   add: () =>{return 23} 
} 
  
console.log("Employee  Object ") 
console.log(employee.firstNumber);
console.log(employee.lastNumber);
//note:Interfaces are not to be converted to JavaScript. It’s just part of TypeScript.


//Union Type and Interface
interface viewdata { 
   houseNumber:string; 
   address:string[]|string|(()=>string); 
} 

//address as string 
var options:viewdata = {houseNumber:"abc123",address:"nakshatara i-land"}; 
console.log(options.address)  

//address as a string array 
options = {houseNumber:"test1",address:["nakshtra","-land"]}; 
console.log(options.address[0]); 
console.log(options.address[1]);  

//address as a function expression 
options = {houseNumber:"test1",address:()=>{return "**Hello World**";}}; 

var fn:any = options.address; 
console.log(fn());



//class
class student {
    id: any; 
    name: string;

    constructor(student_id,college_name:string){

        this.id =student_id;
        this.name =college_name
    }
    add(a,b) { 
       console.log(a+b + "constructor data" + "student id is "+ this.id +"student name is " + this.name)  
    } 
 } 
 var obj = new student(12,"manisha"); 
 obj.add(12,34);





 class students{

   x:any;
   y:any;
   
    constructor(id, num?){
this.x =id;
this.y =num;



    }


    add(){
       var t = this.x + this.y;
       console.log(t);


    }

    sub(){
      var t = this.x  - this.y;
      console.log(t);


   }
 }


 //var obj2 = new students(12);//no error due to optional parameters
 //Instantiating a class
 var obj2 = new students(12,12);
 //accessing an attribute 
obj2.x; 
console.log(obj2.x)
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
class college { 
   university_id:number 
   college_name:string;
   constructor(a:number,b:string) { 
      this.university_id = a 
      this.college_name =b
   } 
} 

class Department extends college { 
   dep_name:string;
   disp():void { 
      console.log("university id of " + this.college_name + "is"  +this.university_id) 
   } 

}

class emp extends Department {
   call():void{

      console.log( this.college_name + "is"  +this.university_id  + "department" +this.dep_name); 
   }
  

}

class salary extends Department {

   no_emp:number =12;
   call():void{

      console.log( this.college_name + "is"  +this.university_id + "department"+this.dep_name +"no of emp" + this.no_emp); 
   }
  

}
  
var obj3 = new Department(223,"MITAOE"); 

obj3.disp()

//multi-level inheritance
//When a derived class is derived from another derived class, 
//multilevel inheritance has more than one parent class like relation between Grandfather,
// Father, and Child


class Animal {   
   eat():void {   
       console.log("Eating")   
    }   
}   
class Dog extends Animal {   
  bark():void {   
     console.log("Barking")   
  }   
}  
class BabyDog extends Dog{   
   weep():void {   
       console.log("Weeping")   
    }  
}  
let obj4 = new BabyDog();   
obj4.eat();  
obj4.bark();  
obj4.weep()  

//example

class University{
   a: number;
   total_colleges(a:number):void{
      console.log(this.a =a)
   }

}
class colleges extends University{
  total_department(a:number):void{
   console.log(this.a =a)
  }
}

class Employee extends colleges{
   total_emp(a:number):void{
      console.log(this.a =a)
   }
}

var obj5 =new Employee();
obj5.total_colleges(10);
obj5.total_department(8);
obj5.total_emp(1000);


//Class inheritance and Method Overriding
//Method Overriding is a mechanism by which the child class redefines the superclass’s method.


class cal { 
   add():void {
      console.log("add() from Parent called…") 
   } 
} 

class results extends cal { 
   add():void { 
      super.add() //The super keyword is used to refer to the immediate parent of a class(cal)
      console.log("add() is from result class…")
   } 
}
   class sub extends results { 
      add():void { 
         super.add() //The super keyword is used to refer to the immediate parent of a class(results)
         console.log("add() is from sub class…")
      } 
} 

var obj6 = new sub() 
obj6.add()

//static Keyword

//static keyword can be applied to the data members of a class
//static variable retains its values till the program finishes execution.
// Static members are referenced by the class name.

class StaticMem {  
   static num:number; 
   static num1:number; 
   
   static disp():void { 
      console.log("The value of num is"+ StaticMem.num) 
   } 
   
} 

StaticMem.num = 12     // initialize the static variable 
StaticMem.disp()      // invoke the static method

//instanceof operator
//The instanceof operator returns true if the object belongs to the specified type.


class Person{ } 
var obj7 = new Person() 
var isPerson = obj7 instanceof Person;//true
//var isPerson = obj7 instanceof University;  //false
console.log(" obj is an instance of Person " + isPerson);

//Classes and Interfaces


interface ILoan { 
   interests:number 
} 

class AgriLoan implements ILoan { 
   interests:number 
   rebates:number 
   
   constructor(interest:number,rebate:number) { 
      this.interests = interest 
      this.rebates = rebate 
   } 
} 

var obj8 = new AgriLoan(10,1) 
console.log("Interest is : "+obj8.interests+" Rebate is : "+obj8.rebates )
 //Interfaces and Inheritance

 //An interface can be extended by other interfaces.
 //Use the extends keyword to implement inheritance among interfaces.
 //Syntax: Single Interface Inheritance
//   Child_interface_name extends super_interface_name


interface Person { 
   age:number 
} 

interface hobby extends Person {
   hobby_name:string 
} 

var drummer = <hobby>{}; 
drummer.age = 27 
drummer.hobby_name = "Drums" 
console.log("Age:  "+drummer.age) ;
console.log("hobby_name:  "+drummer.hobby_name)
//Syntax: Multiple Interface Inheritance
//Child_interface_name extends super_interface1_name, 
//super_interface2_name,…,super_interfaceN_name

interface IParent1 { 
   v1:number 
} 

interface IParent2 { 
   v2:number 
} 

interface Child_add extends IParent1, IParent2 { } 
var Iobj:Child_add = { v1:12, v2:23} 
console.log("value 1: "+this.v1+" value 2: "+this.v2)



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
   firstname:"Tom", 
   lastname:"Hanks" ,
   sayHello:function() { console.log("function in obj") } //add a function to the person object 
}; 


//access the object values 
console.log(person.firstname) 
console.log(person.lastname)
//access the object function 
person.sayHello();

//Objects as function parameters

var person2 = { 
   //object person2
   firstname:"Tom", 
   lastname:"Hanks" 
}; 
//function
var invokeperson = function(obj: { firstname:string, lastname :string }) { 
   console.log("first name :"+obj.firstname) 
   console.log("last name :"+obj.lastname) 
} 
invokeperson(person2)// pass object as a parameter

//TypeScript Enums
//It is used to define the set of named constants, i.e., a collection of related values. 
//TypeScript supports both numeric and string-based enums
//type of enum
//=>Numeric Enums
//=>String Enums
//=>Heterogeneous Enums//
//Numeric Enums

enum Direction {  
   //it is not necessary to assign sequential values to enum members always.
   //if you not asign value then members are auto-incremented from that point
  // Up = 1,  
  //Up=3
  Up,
   Down=3,  
   Left,  
   Right,  
}  
console.log(Direction);  
//String Enums

//String enums are a similar concept to numeric enums
//each enum values are constant-initialized with a string literal,
//String enums do not have auto-incrementing behavior

enum AppStatus {  
   ACTIVE = 'ON',  
   INACTIVE = 'off',  
   ONHOLD = 'halt',  
   ONSTOP = 'pause'  
}  
function checkStatus(status: AppStatus): void {  
  
   console.log(status);  
}  
checkStatus(AppStatus.ONSTOP);  

//Heterogeneous Enums
//The heterogeneous enums are enums, which contains both string and numeric values
enum AppStatus {  
   ACTIVEs = 'Yes',  
   INACTIVEs = 1,  
   ONHOLDs = 2,  
   ONSTOPs = 'STOP'  
}  
console.log(AppStatus.ACTIVE);  
console.log(AppStatus.ONHOLD); 