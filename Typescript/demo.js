// typescript = 5+ 6+ Additional fetures
//storngly coupled
//javascript 
var a = 12;
var b = "abc";
//type annotation
var num1 = 12;
var num2 = "abc";
var confrm = true;
var h = "23";
console.log(typeof (h));
// typescript = 5+ 6+ Additional fetures
//storngly coupled
//javascript 
var a = 12;
var b = "abc";
//type annotation
var num1 = 12;
var num2 = "abc";
var confrm = true;
var h = "23";
console.log(typeof (h));
//data type 
//primitive and non-primitive 
var h1 = 12;
//array,object
var obj = { id: 1, name: 'abc', number: 1234 };
console.log(obj.id);
//array in javascript
var arr = [];
var arr1 = new Array();
//array +object 
var student = [{ id: 1, name: 'abc', number: 1234 },
    { id: 2, name: 'abc', number: 1234 },
    { id: 3, name: 'abc', number: 1234 }, { id: 2, name: 'abc', number: 1234 },
    { id: 3, name: 'abc', number: 1234 }];
//for
for (var i = 0; i < student.length; i++) {
    console.log(student[i].id);
    console.log(student[i].name);
    console.log(student[i].number);
}
//for in  directly return index number
for (var data in student) {
    console.log(student[data].id);
    console.log(student[data].name);
    console.log(student[data].number);
}
//for of loop  directly store the data
for (var _i = 0, student_1 = student; _i < student_1.length; _i++) {
    var data = student_1[_i];
    console.log(data.id);
    console.log(data.name);
    console.log(data.number);
}
//forEach loop every time call back function calls
student.forEach(function (value) {
    console.log(value);
    console.log(value.id);
});
var datas = [12, 34, 56, 78];
datas.forEach(function (a) {
    console.log(a);
});
//array in typescript syntax
var arr3 = [2, 5, 7];
//empty array
var arr5 = [];
arr5.push(1);
console.log(arr5);
arr5.push("sss");
console.log(arr5);
arr5.push(true);
console.log(arr5);
//function in the ts
function abc(a, b) {
    //return a+b;
}
abc(12, 45);
//if,if else,if elese if,
//grade system
var marks = 10;
//a =90-100 ,b =80-90,c =70-80, d =60-40 ,fail =<40
if (marks == 70) {
    console.log("A");
}
else if (marks == 50) {
    console.log("B");
}
else if (marks == 67) {
    console.log("c");
}
else {
    console.log("fail");
}
//while ,do while
while (marks == 67) {
    console.log("true");
}
do {
    console.log("false");
} while (marks == 34);
//== and === 
// == only check value
//=== value and data types
