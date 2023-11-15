
Create Button 
=============================================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SLGS - JS Tutorial</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Subscribe to My channel</h1>
    <p id="main">Please hit the following button & subcribe to SL Geek School</p>

    <button type="button" onclick='document.getElementById("main").innerHTML = "Thank for Subscribing"'>Subscribe</button>
    
    <script src="script.js"></script>
    
    
</body>
</html>

Click button and genarate time
=============================================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SLGS - JS Tutorial</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Time & Date</h1>
    <p id="time">Click following button to generate the time.</p>
    
    <button type="button" onclick="document.getElementById('time').innerHTML=Date()" >Display Time</button>
</body>
</html>

change font size  click button
============================================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SLGS - JS Tutorial</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>The Light Bulb JS Challenge</h1>
    <p id="test">Press Turn on to light up the bulb and press Turn off to switch off</p>

    <button onclick="document.getElementById('test').style.fontSize='30px'">change</button>  
      
</body>
</html>

click button change colors
=============================================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SLGS - JS Tutorial</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>The Light Bulb JS Challenge</h1>
    <p id="test">Press Turn on to light up the bulb and press Turn off to switch off</p>

    <button onclick="document.getElementById('test').style.color='red'">change</button>  
      
</body>
</html>

click and nothing word
=============================================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SLGS - JS Tutorial</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>The Light Bulb JS Challenge</h1>
    <p id="test">Press Turn on to light up the bulb and press Turn off to switch off</p>

    <button onclick="document.getElementById('test').style.display='none'">change</button>  
      
</body>
</html>

click and change font weight
=============================================================================

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SLGS - JS Tutorial</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>The Light Bulb JS Challenge</h1>
    <p id="test">Press Turn on to light up the bulb and press Turn off to switch off</p>

    <button onclick="document.getElementById('test').style.fontWeight='bold'">change</button>  
      
</body>
</html>

Click button and display Hidden paragraph
=============================================================================

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SLGS - JS Tutorial</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>The Light Bulb JS Challenge</h1>
    <p id="test">Press Turn on to light up the bulb and press Turn off to switch off</p>

    <p id="demo" style="display: none;">This is a hidden block</p>

    <button onclick="document.getElementById('demo').style.display='block'">change</button>  
      
</body>
</html>

Number Validation
=============================================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SL Geek School</title>


</head>

<body>

    <script src="script.js"></script>
    <p>Enter Mobile Number  : <br> <textarea name="" id="num" cols="30" rows="1"></textarea>
        <br><button onclick=validation()>Validate</button>
        <h3 id="msg"></h3>
</body>
</html>

script.js
===========
function validation(){
let phone = document.getElementById("num").value;

let numLength = phone.length;
let firstNums = phone.substr(0,2);
let lastNums = phone.substr(numLength-9, 9);
let num;

    if(numLength < 9){
    alert("Number Missing! Please check again.. ")
    document.getElementById("msg").innerHTML = "Invalid Number";
    } else if (numLength == 9){
        alert("Number validation successful!");
        num = "94" + phone;
        document.getElementById("msg").innerHTML = num;
    } else if (numLength == 10){
        alert("Number validation successful!");
        num = "94" + lastNums;
        document.getElementById("msg").innerHTML = num;
    } else if (numLength > 11){
        alert("Invalid Number! Please check again.. ")
        document.getElementById("msg").innerHTML = "Invalid Number";
    } else if(numLength == 11 && firstNums != 94) {
        alert("Invalid Number! Please check again.. ")
        document.getElementById("msg").innerHTML = "Invalid Number";
    } else if(numLength == 1 && firstNums == 94){
        alert("Number validation successful!");
        num = phone;
	document.getElementById("msg").innerHTML = num;
    } else {
        alert("Invalid Number! Please check again.. ")
        document.getElementById("msg").innerHTML = "Invalid Number";
    }

}

Bacis Calculator
=============================================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SL Geek School</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <script src="script.js"></script>
    
    <h4>Calculator</h4>
    <h3 id="display">0</h3>
    <hr>
    <button id="n0" onclick=fn0()>0</button>
    <button id="n1" onclick=fn1()>1</button>
    <button id="n2" onclick=fn2()>2</button>
    <button id="n3" onclick=fn3()>3</button>
    <button id="n4" onclick=fn4()>4</button>
    <button id="n5" onclick=fn5()>5</button>
    <button id="n6" onclick=fn6()>6</button>
    <button id="n7" onclick=fn7()>7</button>
    <button id="n8" onclick=fn8()>8</button>
    <button id="eraser" onclick=feraser()>E</button>
    <button id="nAD" onclick=fnAD()>+</button>
    <button id="nMN" onclick=fnML()>-</button>
    <button id="nML" onclick=fnML()>*</button>
    <button id="nDB" onclick=fnDV()>/</button>
    <button id="nEQ" onclick=fnEQ()>=</button>
    <button id="nAC" onclick=fAC() >AC</button>
</body>
</html>

script.js
==========
function fn0(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 0;
}

function fn1(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 1;
}

function fn2(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 2;
}

function fn3(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 3;
}

function fn4(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 4;
}

function fn5(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 5;
}

function fn6(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 6;
}

function fn7(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 7;
}

function fn8(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 8;
}

function fn9(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 9;
}

function feraser(){
    let previous = document.getElementById("display").innerHTML;
    let erasedPre = previous.slice(0, -1);
    document.getElementById("display").innerHTML = erasedPre;
}

let op;
let firstSave;
let secondSave;

function fnAD(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
     op = 1;
}

function fnMN(){
     firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
     op = 2;
}

function fnML(){
     firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
     op = 3;
}

function fnDV(){
 firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
     op = 4;
}

function fnEQ() {
     secondSave = document.getElementById("display").innerHTML;
    if(op ==1) {
        document.getElementById("display").innerHTML = parseInt(firstSave) + parseInt(secondSave);
    } else if (op ==2) {
        document.getElementById("display").innerHTML = parseInt(firstSave) - parseInt(secondSave);
    } else if (op ==3) {
        document.getElementById("display").innerHTML = parseInt(firstSave) * parseInt(secondSave);
    } else if (op ==3){
        document.getElementById("display").innerHTML = parseInt(firstSave) / parseInt(secondSave);
    } else {
        document.getElementById("display").innerHTML = "Invalid";
    }
}

function fAC() {
    document.getElementById("display").innerHTML = "0";
    op = 0;
    firstSave = 0;
    secondSave = 0;
}


Create Data
=============================================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SL Geek School</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
    
    <h3>What is the day today ?</h3>
    <p id="today"></p>
    <script src="script.js"></script>
</body>
</html>

script
======
let day;
switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wensday";
        break;
     case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
        
}

document.getElementById("today").innerHTML = "Today is " + day;

Create Objects
=============================================================================
let student = {
		firstName:"saman", 
		lastName:"gunasekara", 
		age:50
	       }

console.log(student);

student.firstName="sanjeewa";
student.age = "26";
console.log(student);

Method
=============================================================================
let student = {
    firstName:"saman", 
    lastName:"gunasekara",
    age:50,
    fullName: function(){
        return this.firstName +" " + this.lastName;
    }
}

console.log(student.fullName());

Query Selector
=============================================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SL Geek School</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>

    <h1>This is the first heading</h1>
    <h1 class="test">This is the second heading</h1>
    <p class="test">dewjdnhiuefhdweufnhiushfis isuijdsij osijdosj</p>
    <h2 class="test">Test Test</h2>
    <div id="main"></div>

    <script src="script.js"></script>
</body>
</html>

script
=======
document.querySelector("p.test").style.backgroundColor = "green";
document.querySelector('#main').innerHTML = "Hello! Im SL Geek";

Event lisner
=============================================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SL Geek School</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>

    <h1>Event Listner</h1>
    <button id="btn">Alert</button>

    <script src="script.js"></script>
</body>
</html>

script
========
const mainBtn = document.querySelector('#btn');

mainBtn.addEventListener("click", simpleFunc);
document.addEventListener('dblclick',bgfunc);

function simpleFunc(){
    alert("Hello, Its working");
}

function bgfunc(){
    alert("you clicked the background");
}

Local storage use
=============================================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SL Geek School</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>

    <h1>Local Storage</h1>
    <hr>
    <label for="">Enter Your Name</label><input id="inp" type="text"> <button onclick="main()">Add</button>
    <h2 id="main"></h2>
    <script src="script.js"></script>
</body>
</html>

Script
=======
document.getElementById('main').innerHTML = localStorage.getItem('Name1');

function main(){
let names = document.getElementById('inp').value;
localStorage.setItem("Name1", names);
document.getElementById('main').innerHTML = localStorage.getItem("Name1");
}


Arrow Function
=============================================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SL Geek School</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>

    <h1>Local Storage</h1>
    <hr>
    <h2 id="main"></h2>
    <script src="script.js"></script>
</body>
</html>

script
======
// let hello = function(){
//     return "Hello World";
// }

// let hello = () => {
//     return "Hello world 2"
// }

//let sum = (a,b) => a + b;

// let x = () => "Hello!"

// let y = () => {
//     return "Hello!"
// }

let x = (name) => "Hello!" + name;

//document.getElementById('main').innerHTML=hello();

document.getElementById('main').innerHTML=x("yapa");

Arrays
=============================================================================<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SL Geek School</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>

       <script src="script.js"></script>
</body>
</html>

script
======
let x = ["amal", "kamal", "saman"];
console.log(x);

let y = [20,10,12,15];
console.log(y[1]);


for loop
=============================================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SL Geek School</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <h1>These are best fruits</h1>
    <p id="list"></p>
       <script src="script.js"></script>
</body>
</html>

script
=======
const fruits = ["apple", "grapes", "banana", "orange", "papaya", "pineapple"];

let txt = "";
for (let i=0; i < fruits.length; i++){
     txt += fruits[i] + "<br>";
}

document.getElementById('list').innerHTML = txt;

while loop
=============================================================================
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SL Geek School</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
        <h1>Loops</h1>
        <h2>SL Geek School</h2>
       <script src="script.js"></script>
</body>
</html>


script
======
let total = 0;
let i =1;
while(i <= 10){
    total = total + i;
    i++;
}

console.log(total);

do while loop
=============================================================================
let total = 0;
let i =200;
do{
    total = total + i;
    i++;
} while(i <= 99)

console.log(total);

=============================================================================
