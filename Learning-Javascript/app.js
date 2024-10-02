//Practice

// console.log("Hello World !!");

// let a=5;
// let b=10;

// console.log("sum is " , a+b);

// alert("Welcome !!");

// let str="abcd";
 
// if(str[0]=='a' && str.length>3){
//     console.log("Good String !!");
// }
// else{
//     console.log("Not a Good String !!");
// }

// let fName = prompt("Enter First Name : ");
// let lName = prompt("Enter Last Name : ");

// console.warn(`The FullName is : ${fName+" "+lName}`);






//Question 1
// let num=prompt("Enter number : ");
// if(num%10==0){
//     console.log("The number is good.");
// }
// else{
//     console.warn("The number is bad.");
// }


// Question 2
// let name=prompt("Enter name : ");
// let age=prompt("Enter age :");

// alert(`${name} is ${age} years old.`);


// Question 3
// let quarter=5;
// switch(quarter){
//     case 1: console.log("January, February, March");
//     break;

//     case 2: console.log("April, May, June");
//     break;

//     case 3: console.log("July, August, September");
//     break;

//     case 4: console.log("October, November, December");
//     break;

//     default: console.error("Invalid Input! There are only 4 quarter.");
// }


// Question 4
// let str=prompt("Enter string : ");
// if((str[0]=='a' || str[0]=='A') && str.length>5){
//     alert("Golden String");
// }
// else{
//     console.warn("Not a golden String");
// }


// Question 5
// let a=prompt("Enter number 1 : ");
// let b=prompt("Enter number 2 : ");
// let c=prompt("Enter number 3 : ");

// if(a>b && a>c){
//     alert(`${a} is greater !`);
// }
// if(b>a && b>c){
//     alert(`${b} is greater !`);
// }
// else{
//     alert(`${c} is greater !`);
// }


// Question 6
// let num1=prompt("Enter first number : ");
// let num2=prompt("Enter second number : ");

// if(num1[num1.length-1]===num2[num2.length-1]){
//     alert(`${num1} and ${num2} have the same last digit`);
// }
// else{
//     alert(`${num1} and ${num2} does not have the same last digit`);
// }

// let arr=[1,2,3,4,5,6,7,8,9];
// const squareSumAvg=()=>{
//     let square=arr.map((num) => num*num);
//     console.log(square);
//     let sum = square.reduce((acc,ele)=>(acc+ele),0);
//     console.log(sum);
//     let avg=sum/arr.length;
//     console.log(avg);
// }

// squareSumAvg(arr);


// let arr=[1,2,3,4,5,6,7,8,9];
// const arrPlus5=()=>{
//     let newArr=arr.map((num)=>num+5);
//     console.log(newArr);
// }

// arrPlus5(arr);


// let string=["alsfdn", " ksfbjdksbf", "sdlfnbsdgv"];

// const toUpper=()=>{
//     let newArr=string.map((upper)=>upper.toUpperCase());
//     console.log(newArr);
// }

// toUpper(string);


// const doubleAndReturn=(arr,...args)=>[
//     ...arr,
//     ...args.map((num)=>num*2),
// ]
// console.log(doubleAndReturn([1,2,3],4,4));



// const mergeObj=(obj1, obj2)=>({...obj1,...obj2});

// console.log(mergeObj({a:1, b:5},{c:4, d:8}));



let para1=document.createElement("p");
para1.innerText="Hey! I am Red.";
document.querySelector("body").append(para1);
para1.classList.add("red");

let h3=document.createElement("h3");
h3.innerText="Hey! I am Blue.";
document.querySelector("body").append(h3);
h3.classList.add("blue");

let div=document.createElement("div");
let h1=document.createElement("h1");
let paraDiv=document.createElement("p");
h1.innerText="I am in a div;";
paraDiv.innerText="Me Too !!";
div.append(h1);
div.append(paraDiv)
document.querySelector("body").append(div);
div.classList.add("style");

let image=document.createElement("img");
image.src="wallpaperflare.com_wallpaper (11).jpg";
document.querySelector("body").prepend(image);

let button=document.createElement("button");
button.innerText="Click Me !";
button.setAttribute("id","btn");
document.querySelector("body").append(button);

let input=document.createElement("input");
input.setAttribute("placeholder","username");
document.querySelector("body").append(input);

let btn=document.querySelector("#btn");
btn.classList.add("btnStyle");

let heading=document.createElement("h1");
heading.innerHTML="<u> DOM practice </u>";
document.querySelector("body").append(heading);

let para2=document.createElement("p");
para2.innerHTML=" Himanshu Tripathi's <strong>Coding Practice</strong>";
document.querySelector("body").append(para2);



