// 1. Given a number round it to the nearest 50 without using "if" operator(conditions).


let num = + prompt("Enter a number");
let roundedNumber = (num%50<25) ? alert(num - num%50) : alert((num - num%50) + 50);


// 2.Find the sign of product of three numbers without multiplication operator. Display the s pecified sign.

 
let num1 = + prompt(`Enter first number`);
let num2 = + prompt(`Enter second number`);
let num3 = + prompt(`Enter third number`);

 if((num1<0 && num2<0 && num3<0)
    || (num1<0 && num2>0 && num3>0)
    || (num1>0 && num2<0 && num3>0)
    || (num1>0 && num2>0 && num3<0)){
    alert(`-`);
}else if(num1===0 || num2===0 || num3===0){
    alert(`unsigned`);
}else{
    alert(`+`)
}


// 3. Enter a digit and a number. Check whether the digits contains in the number or not.


let dig = + prompt("Enter a digit");
let num = + prompt("Enter a number");
let reminder;

while(num > 0){
    reminder = num % 10;
    num=(num - reminder) / 10;
    if(dig == reminder){
        break;
    }num
}
if(dig == reminder){
    alert("Yes")
}else{
    alert("No")
}


// 4. Enter a number. Find the difference between its biggest and smallest digits.


let num = + prompt("Enter a number");
let reminder;
let max = 0
let min = 9

if(num < 10){
    alert(0);
}else{
while(num > 0){
    reminder = num % 10;
    num = (num - reminder) / 10;
    if(max > reminder){
        max = max;
    }if(max < reminder){
        max = reminder;
    }if(min < reminder){
        min = min;
    }if(min > reminder){
        min = reminder;
    }num;
} alert(max - min);
}


// 5.Insert a number. Print "Yes" if the number is prime, "No" otherwise.


let num = + prompt( "Insert a number" );
let i = 2;
let remainder;

while(i < num){
    remainder = num % i;
        if(remainder == 0){
            break;
    } i++;
}

if(remainder != 0){
    alert("Yes");
}else{
    alert("No");
}