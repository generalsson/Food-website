function one(){
    alert("Your order has been placed")
}

function myFunction() {
    alert("Your information has been submitted")
  }
let z = 5
z = "eddie"
console.log(z)

var value = 50;
function a()
{
    alert(window.value)
}


function msg()
{
  var where = 2;
  do{
    alert(where);
    where++;
  }while(where<8)
}




function ap(){
  for(var counter = 2; counter < 21; counter = counter+2)
  {
  alert(counter);
  }
}
/*var grade = "P";
alert("Entering switch block");
switch(grade)
{
  case 'A': alert("Excellent");
  break;

  case 'B': alert("pretty good");
  break;

  case 'C': alert("Passed");
  break;

  case 'D': alert("not so good");
  break;

  case 'F': alert("Failed");
  break;

  default: alert("unknown grade");
}

for(var counter = 1; counter < 5; counter++)
{
alert(counter);
}*/
function first(){
var numbers = new Array();
 numbers[0] = 12;
 numbers[1] = 15;
 numbers[2] = 45;
 numbers[3] = 22;

 var countries = ["USA", "ASIA","CHINA"];
countries.length; //3
countries.indexOf("CHINA"); //2
countries.push("JAPAN");
alert(countries)
}

function hello(name, age, gender)
{
  alert(name + " is " + age + " years old " + " and is " + gender);
}

function today(){
var today=new Date();
alert(today);
}

function printvalue(){
  var name=document.form1.name.value;
  var name2=document.form1.name2.value;
  alert("welcome: "+name + " " + name2);
}

function getcube(){
var number = 5;
alert(number*number*number)
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (i = 0; i < 6; i++ ) {
  color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }   
  function myFunction() {
    alert("Your information has been submitted")
  }

  function five() {
    alert("Coupon has been applied")
  }
  function submission() {
    alert("Your info has been sumbitted");
  }
  function login() {
    alert("Your info has been sumbitted");
  }

  function sub() {
    alert("You have subscribed");
  }

