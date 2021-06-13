var name1="Anant Dargude";
console.log("Hello World I am " + name1);
var anant;
console.log("This Variable is declared but not defined and has value- "+ anant);

function myAdd(){
  var a,b;
  a=10;
  b=20;
  // var c=a+b;
  var c;
  console.log("Value of c inside function block is "+ c);
  return c;
}
console.log(myAdd());


{
  var aa=11;
  let bb=22;
  console.log("Value of let inside block is "+ bb);
}

console.log("Value of var outside block is "+ aa);
// console.log("Value of c outside function block is "+ c); //not allowed since c has function scope of myAdd()

// Global Scope 
// console.log("This is "+ window.name1);

function myFunc1(){
  var a=10; b=20;
  var c= a*b;
  return c;
}
console.log("Multiplication is- "+ myFunc1());



// Object 
var person= { 
  fname:"Anant", lname:"Dargude", age:"26", 
  eyeColor:"Brown", 
  yob:1995, 
  fullname: function(){return this.fname+ " "+ this.lname}
}

console.log( person.fname, person.fullname() );
console.log( person );


//Syntax of the function and function inside object
function fff(){};
var abab;
abab={
  fname:anant,
  lname:anant,
  funcc: function(){return "this is Function inside an Object"}
}
console.log(abab.funcc());

//Operations on string
var myString= "Anant Sahebrao Dargude"
console.log();
console.log(myString);
var strLength= myString.length;
console.log("length of the string is- " +strLength);
var pos = myString.indexOf("Anant");
console.log("Index of Anant is- " +pos);
var lix = myString.lastIndexOf("Anant");
console.log("Last index of Anant- "+ lix);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
function myFruitFunc(){
  var frlen= fruits.length;
  var text= "<ul>"
  for(let x=0; x<frlen; x++ ){
    text += "<li>" + fruits[x] + "</li>"
  }
  text += "</ul>"
  return text;
}

// var points= ["50","12","2","19","111","69"];
// document.getElementById("compare").innerHTML=points;
// function compfun1(){
//   points.sort();
//   document.getElementById("compare").innerHTML=points;
// }
// function compfun2(){
//   points.sort(function(a,b){return a-b});
//   document.getElementById("compare").innerHTML=points;
// }
// function compfun3(){
//   points.sort(function(a,b){return b-a});
//   document.getElementById("compare").innerHTML=points;
// }
// function compfun4(){
//   points.sort(function(a,b){return a-b})
//   document.getElementById("minmax").innerHTML= "Minimum Value is-"+points[0]+" Maximum Value is-"+points[points.length-1];
// }


var arrFruit = ["Apple", "Kiwi", "Pineapple", "Banana", "Orange"];
var sortedarrFruit = arrFruit.sort();
console.log(sortedarrFruit);
var reverseSortedArrFruit = sortedarrFruit.reverse();
console.log(reverseSortedArrFruit);

var myNumArr = [112, 14, 67, 33, 19, 0, 27, 5];
console.log(myNumArr);
var sortedmyNumArr = myNumArr.sort();
console.log(sortedmyNumArr);
var ascSortedmyNumArr= myNumArr.sort(function(a,b){return a-b});
console.log(ascSortedmyNumArr);
var desceSortedmyNumArr = myNumArr.sort(function(a,b){return b-a});
console.log(desceSortedmyNumArr);



myNumArr.forEach(myForEachfunc);
function myForEachfunc(value,index, array){
  console.log("At Position " + index + " We have "+ value +" of the array- "+ array);
}

var myDate = new Date();
console.log(myDate); 
document.getElementById("mydate").innerHTML=myDate;
document.getElementById("mydate1").innerHTML=myDate.toDateString(); //makes it readable short
document.getElementById("mydate2").innerHTML="Year is- "+myDate.getFullYear();  //year
document.getElementById("mydate3").innerHTML="Months is- "+myDate.getMonth(); //0-11
document.getElementById("mydate4").innerHTML="Date is- "+myDate.getDate();  //gives date of month 0-31
document.getElementById("mydate5").innerHTML="Day is- "+myDate.getDay(); //0-6
document.getElementById("mydate6").innerHTML="MilliSeconds from start are- "+myDate.getTime();
document.getElementById("mydate7").innerHTML="Hours are- "+myDate.getHours();
document.getElementById("mydate8").innerHTML="Minutes are- "+myDate.getMinutes();
document.getElementById("mydate9").innerHTML="Seconds are- "+myDate.getSeconds();
document.getElementById("mydate10").innerHTML= "MilliSeconds are- "+ myDate.getMilliseconds(); 



function convertedDay(cch){
  var txt; 

  switch(cch){
    case 0: txt="Sun"; break;
    case 1: txt="Mon"; break;
    case 2: txt="Tue"; break;
    case 3: txt="Wed"; break;
    case 4: txt="Thu"; break;
    case 5: txt="Fri"; break;
    case 6: txt="Sat"; 
    default: txt="none";
  }
  return txt;
}
var convertedMonth = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept","Oct", "Nov", "Dec"];

var x, txt12, txt13;
txt12=""; 
txt13="";
//for in
var person = {"fname":"John", "lname":"Doe", "age":25};
for (x in convertedMonth){ txt12 += convertedMonth[x] + " " }
for (x in person){ txt12 += person[x]+" "}
document.getElementById("forin").innerHTML=txt12;



//for of
var x;
for (x of convertedMonth){ txt13 += x + " " }
// for (x of person){ txt13 += x+ ""} //not allowed
document.getElementById("forof").innerHTML=txt13;




function refreshTime(){
  var myStyleDate = new Date();
 
  document.getElementById("msdday").innerHTML= convertedDay(myStyleDate.getDay());
  document.getElementById("msddate").innerHTML=myStyleDate.getDate();
  document.getElementById("msdmonth").innerHTML=convertedMonth[myStyleDate.getMonth()];
  document.getElementById("msdyear").innerHTML=myStyleDate.getFullYear();
  document.getElementById("msdhours").innerHTML=myStyleDate.getHours();
  document.getElementById("msdminutes").innerHTML=myStyleDate.getMinutes();
  document.getElementById("msdseconds").innerHTML=myStyleDate.getSeconds();
}
setInterval(refreshTime,1000);


//Countdown to our Goal
var countDownDate = new Date("Jun 30, 2021 23:59:59").getTime();
// Update the count down every 1 second
var x = setInterval(myDate11, 1000);
function myDate11() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  // document.getElementById("refdate").innerHTML = "Time Left to Complete your Goal is- "+ days + "-Days " + hours + ":"
  // + minutes + ":" + seconds;
  document.getElementById("msddayc").innerHTML = days;
  document.getElementById("msdhoursc").innerHTML = hours;
  document.getElementById("msdminutesc").innerHTML = minutes;
  document.getElementById("msdsecondsc").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}



function ipfunc(){
var myip= document.getElementById("ipi").value;
try{
  if(myip == "") throw "Empty, Please enter Number";
  if(isNaN(myip)) throw "Not a Number, Please Enter Number";
  myip= Number(myip);
  if(myip < 5) throw "Too small Number";
  if(myip > 50) throw "Too Big Number";
  if(myip>=5 && myip<=50) throw "Correct, Input Accepted";
}
catch(err){
  document.getElementById("ipv").innerHTML= err;
}
finally{
  //used to empty text box regardless of error
  document.getElementById("ipi").value="";
}
}


//JS Classes
class Car{
  constructor(name, year){
    this.name=name;
    this.year=year;
  }
  age(){
    let now= new Date();
    now= now.getFullYear();
    return now - this.year; 
  }
}
var myCar= new Car("Ritz", 2012);
document.getElementById("democlass").innerHTML= "My Car is- "+ myCar.age()+" year old";


//Callback Function
function myDisplay(mysum1) {
  document.getElementById("callback").innerHTML = "Multiplication is- "+  mysum1;
}
function myCalc(n1,n2,callBackfunc){
  okmult= n1*n2;
  callBackfunc(okmult);
}
//calling function with callback function as argument
myCalc(5,5,myDisplay);


//Time out Async Function
setTimeout(myFunction, 3000);
function myFunction() {
  document.getElementById("async").innerHTML = "I love You !!";
}

setInterval(myTime, 1000);
function myTime(){
  var myDate= new Date();
  var hr=myDate.getHours();
  var min=myDate.getMinutes();
  var sec=myDate.getSeconds();
  
  document.getElementById("interval").innerHTML=hr + ":" + min + ":" + sec;
}
// document.getElementById("asyncawait").innerHTML= await myPromise;

//Async and Await
async function myAsync(){
  let myPromise = new Promise(function (myResolve, _myError) {
    setTimeout(function(){ myResolve("Hello Moto")},3000);
  });
  document.getElementById("asyncawait").innerHTML= await myPromise;
}
myAsync();


//Change image content by DOM Manipulation
function changeImg(){
  var element = document.getElementById("dynamicImg");
  var myCurrentImg = element.src;
  var color= "2px solid black";

  if("http://127.0.0.1:5500/images/img1.jpg" == myCurrentImg){ 
    myCurrentImg= "http://127.0.0.1:5500/images/img2.jpg";
    color= "2px solid red";
  }else if("http://127.0.0.1:5500/images/img2.jpg" == myCurrentImg){ 
    myCurrentImg= "http://127.0.0.1:5500/images/img3.jpg";
    color= "2px solid yellow";
  }else if("http://127.0.0.1:5500/images/img3.jpg" == myCurrentImg){ 
    myCurrentImg= "http://127.0.0.1:5500/images/img1.jpg";
    color= "2px solid green";
  };

  document.getElementById("dynamicImg").src= myCurrentImg;
  document.getElementById("dynamicImg").style.border=color;
}


function mOver(elem){ elem.innerHTML="Move Aside I am Busy"};
function mOut(elem){ elem.innerHTML= "Hello Anant Dargude"};

function mDown(elem){ elem.innerHTML="Relese Me"; elem.style.backgroundColor="blue"};
function mUp(elem){ elem.innerHTML= "Dare you click me again"; elem.style.backgroundColor="yellow"};

//addEventListener() Method
document.getElementById("eventListenerBtn").addEventListener("click", okDate);
function okDate(){ document.getElementById("eventListenerDisp").innerHTML = Date(); }

//Passing parameter to the EventListener using Anonymous Function
document.getElementById("eventParam").addEventListener("click", function(){ myAddForEvent(15,25);});
function myAddForEvent(a,b){document.getElementById("eventParamDisp").innerHTML=a*b;}
