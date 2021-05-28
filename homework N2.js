// 1.Given a number.Print "odd" if the number is odd and "even" if it`s even.

let number=prompt('Enter a number');
let lastDigit=number%10;
if(lastDigit%2===0) {
    console.log('even');
} else{
    console.log('odd');
}


// 2.Given a positive integer.Bring the last dijit of the number to the begining.
//Print the new number. If the last dijit of the inserted number is 0, number remains the same. 

let number=prompt("Enter number");
let lastDigit=(' ' + number%10); 
let otherDijits=((' ' + number-lastDigit)/10);
let outputNumber=lastDigit+otherDijits;

if(lastDigit==0 || number<10){
    console.log(number);
}   else{
    console.log(outputNumber)
}


//3.Given five numbers as input.Calculate and print the
//average of the numbers(without using arrays)

let average=sum/5
sum=a+b+c+d+e
let a=45
let b=-12
let c=0
let d=3
let e=-15

console.log(average)

// 4.Given three numbers. Sort them by the ascending order

let a=-456
let b=-23
let c=0

if(a>b && a>c && b>c) {
    console.log(c,b,a);
}if(a>b && a>c && c>b) {
    console.log(b,c,a);
}if(a<b && a>c && b>c) {
    console.log(c,a,b);
}if(a<b && a<c && b>c) {
    console.log(a,c,b);
}if(a>b && a<c && b<c) {
    console.log(b,a,c);
}   else{
    console.log(a,b,c);
}

//5.Given the following code, rewrite it using only two if operators.(Hint:use logical operators).

var n=+prompt();

var i=0;
var j=0;

if(n%2 === 0) {
    if(!Math.floor(n/10)) {
    i+=1;
  }
}

if(n%3 === 0) {
    if(n%10 === 1) {
    j+=1;
  }
}

// Rewrited sample

var n=+prompt();

var i=0;
var j=0;

if(n<10 && n%2 === 0) {
    i+=1;
}

if(n%10 === 1 && n%3 === 0) {
    j+=1;
}