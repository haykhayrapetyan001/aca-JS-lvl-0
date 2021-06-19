// 1.Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

function separate ( arr ){
    let even = [];
    let odd = [];
    for ( let i = 0; i < arr.length; i++ ){
        if ( arr[i] % 2 === 0 ){
           even.push ( arr[i] ); 
        }
        if ( arr[i] % 2 !== 0 ){       
            odd.push ( arr[i] )
        } 
    } 
    return console.log(odd,even) 
}

// 2.Given a word and a list of possible anagrams,select the correct sublist.

let word = "pencil";
let list = ["licnep", "circular", "pupil", "nilcpe", "leppnec"];
let res = [];
for( let i = 0; i < list.length; i++ ){
    if( list[i].length === word.length ){
        let anagram = list[i];
        let num = 0;
        for( let s = 0; s < anagram.length; s++ ){
            let sighn = anagram[s];
            for( let c = 0; c < word.length; c++ ){
                let char = word[c];
                if( char === sighn ){
                    num = num+1;
                    if( num === word.length && num === anagram.length ){
                        res.push(anagram);
                    }
                }
            }
        }
    }
}console.log(res)


// 3.Write a function which receives two strings and removes
//appearances of the second string from the first one.

function removeSame (input1, input2){
    let arr1 = [];
    let arr2 = []; 
    let res = [];
    for ( let i = 0; i <= ( input1.length - 1); i++ ){
        arr1.push( input1 [i] );
    }
    for ( let i = 0; i <= ( input2.length - 1); i++ ){
        arr2.push( input2 [i] );
    }
    for ( let i = 0; i < ( arr1.length ); i++ ){
        if( arr1 [i] !== arr2 [0] ){
            res.push( arr1 [i] );
        }else if( arr1 [i] === arr2 [0] && arr2.length === 1 ){
            res = res;
        }else if( arr1 [i] === arr2 [0] && arr1 [i + 1] === arr2 [0 + 1] ){
            arr1.shift( arr1 [1], arr1 [i + 1] );
            res=res
        }
    } return res.join("")
}
      