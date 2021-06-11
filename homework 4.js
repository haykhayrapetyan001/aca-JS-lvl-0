// 1. Given a number, print its digits count.
 

let num = + prompt ("Enter a number");
num = (Math.abs(num)) + "";
let dig =(num.length);
console.log(dig);


// 2. Count nombers of digit 9 in number.
 

let num = prompt("Enter a number");
let countOf9 = 0;
for(let i=num.length ; i > 0; i--  ){
    let rem=num%10;
    num=(num-rem)/10;
        if(rem === 9){
            countOf9 += 1;
        }
}
console.log(countOf9);


// 3. Given two numbers. Print powers of 2 between that numbers(without using Math.pow).
 

const num1 = + prompt("Enter first number");
const num2 = + prompt("Enter second number");
if(num1 < 0 && num2 < 1){
        console.log(0);
}
for(let i = num1; i <= num2; i ++){
    if(i % 2 === 0 || i === 1){
        let num = i;
            while(num >= 1){
                num = num / 2;
                    if(num === 1 || i === 1){
                        console.log(i); 
                    }
           }
    }
}


// 4. Insert a number. Print "Yes" if it contains 3 successive zeroes,otherwise print"No".

let num = prompt("Enter a number");
for(let i = num.length; i>0; i--){
    num =+ num;
    let dig1 = num % 10;
    let dig2 = Math.round((num % 100) / 10);
    let dig3 = Math.round((num % 1000) / 100);
    num = (num - (num % 10)) / 10;
    if(dig1 === 0 && dig2 === 0 && dig3 === 0){
        result="Yes";
        break;       
    }else{
        result="No";
    }
}


// 5. Insert two positive integers n and m between 1 and 10.Compute and print  m power of n.

const num1 = + prompt("Enter first number");
const num2 = + prompt("Enter second number");
console.log = Math.pow(num1, num2);