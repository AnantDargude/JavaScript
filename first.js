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

document.getElementById("browserHeight").innerHTML= "Height of the Browser window is- "+ innerHeight; //can eliminat window.
document.getElementById("browserWidth").innerHTML= "Width of the Browser window is- "+ window.innerWidth;

document.getElementById("locationObj").innerHTML= "Port Number is- " + window.location.port + 
"<br> URL is- "+ location.href + "<br> Host Name is- "+ window.location.host + "<br> Pathname Name is- "+location.pathname;



function myConfirm(){
  var txt;
  if(window.confirm("I am Confirm Box")){
    txt= "You pressed Ok, True";
  }else{
    txt= "You Pressed Cancel, False"
  }
  document.getElementById("confirmBoxDisp").innerHTML=txt;
}


function myPrompt(){
  var x = prompt("I am Prompt Box", "Anant Dargude");
  
  if( x==null || x== ""){
    txt="User Cancel the Prompt"; 
  }else{
    txt = "My Name is " + x;
  }
  document.getElementById("promptDisp").innerHTML=txt;
}


//Ajax Working
function myAjaxFunc(){
  const xhttp = new XMLHttpRequest();
  xhttp.onload= function(){
    document.getElementById("ajaxDemo").innerHTML= xhttp.responseText;
  }
  xhttp.open("GET", "ajaxExample.txt");
  // xhttp.open("GET", "jsonExample.json");
  xhttp.send();
}

// XML TABLE
function loadDoc(){
  const fetchxml= new XMLHttpRequest();
  fetchxml.onload= function(){ 
    // const xmlDoc= fetchxml.responseXML;   //or
    const xmlDoc= this.responseXML;
    const x= xmlDoc.getElementsByTagName("CD");
    myXMLcall(x) 
  }
  fetchxml.open("GET", "xmlExample.xml");
  fetchxml.send();
}
function myXMLcall(x){
  // const xmlDoc= xml.responseXML;
  // const x= xmlDoc.getElementsByTagName("CD");
  table= "<tr> <th>Artist</th><th>Title</th><th>Company</th> </tr>";
  for(let i=0; i< x.length; i++){
    table += "<tr><td>" + x[i].getElementsByTagName("ARTIST")[0].firstChild.nodeValue + "</td><td>" +
    x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "</td><td>" +
    x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue + "</td></tr>";
  }
  document.getElementById("tableXML").innerHTML= table;
}

//Video Libraray
{
  let i=0;
  let x;
  let len;

  const xhttp= new XMLHttpRequest();
  xhttp.onload= function(){
    let xmlDoc= xhttp.responseXML;
    x= xmlDoc.getElementsByTagName("CD");
    len= x.length;
    myDisp(i);
  }
  xhttp.open("GET", "xmlExample.xml");
  xhttp.send();

  function myDisp(i) {
    document.getElementById("cdDisp").innerHTML= "<br> Title- " + 
    x[i].getElementsByTagName("TITLE")[0].firstChild.nodeValue + "<br>"+
    "Artist- " +x[i].getElementsByTagName("ARTIST")[0].firstChild.nodeValue + "<br>" +
    "Country- " +x[i].getElementsByTagName("COUNTRY")[0].firstChild.nodeValue + "<br>" +
    "Company- " +x[i].getElementsByTagName("COMPANY")[0].firstChild.nodeValue + "<br>" +
    "Price- " +x[i].getElementsByTagName("PRICE")[0].firstChild.nodeValue +"<br>" +  
    "Year- " +x[i].getElementsByTagName("YEAR")[0].firstChild.nodeValue;
  }

  function next() {
    if(i < len-1){ i++; myDisp(i) }
    else if(i == len-1){ i=0; myDisp(i)}
  }
  function previous() {
    if(i > 0){ i--; myDisp(i) }
  }
  
}


//JSON
const txt = '{"name":"John", "age":30, "city":"New York", "msg":"I am JSON data"}'
const obj = JSON.parse(txt);
document.getElementById("jsondemo").innerHTML = obj.name + ", " + obj.age + ", "+ obj.msg;

const text = '[ "Ford", "BMW", "Audi", "Fiat","- i am a JSON Array" ]'; //JSON Objecr/array string
const myArr = JSON.parse(text);
document.getElementById("jsondemo1").innerHTML = text;     //notice this
document.getElementById("jsondemo11").innerHTML = myArr;     //and this too


// Below is the JSON Object it does not need parse to be done only json string need it 
// const text = [ "Ford", "BMW", "Audi", "Fiat","- i am a JSON Array" ]; //JSON Objecr/array
// document.getElementById("jsondemo1").innerHTML = text;

const text2 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj2 = JSON.parse(text2);
obj2.birth = new Date(obj2.birth);                                //converted string into date obj
document.getElementById("jsondemo2").innerHTML = obj2.name + ", " + obj2.birth; 


//STORE AND RETRIVE DATA ON LOCAL STORAGE
// store 
const mydata11={fname:"Anant", lname:"Dargude", age:26};
const myjson= JSON.stringify(mydata11);
localStorage.setItem("mylocalfile", myjson);
// retrive 
let mytxt7= localStorage.getItem("mylocalfile");
let ob1= JSON.parse(mytxt7);
document.getElementById("jsondemo3").innerHTML= ob1.lname;


//Looping with for-in in JSON
// const myJSON = '{"name":"John", "age":30, "car":null}';
// const myObj = JSON.parse(myJSON);
// let text = "";
// for (let x in myObj) {
//   text += x + ", ";               //will give key
//   text += myObj[x] + ", ";        //will give value
// }


//AJAX and JSON together
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("jsonajax").innerHTML = myObj.msg;
}
xmlhttp.open("GET", "jsonExample.json");
xmlhttp.send();






