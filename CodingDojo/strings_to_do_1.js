// Create a function that, given a string, returns all of that string’s contents,
//  but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"
function removeBlanks(text){
    let newText = ""
    for(let i=0; i<text.length; i++){
        if(text[i] != " "){
            newText+= text[i]
        }
    }
    return newText
}
console.log(removeBlanks("I can not BELIEVE it's not BUTTER "));
// Create a JavaScript function that given a string, returns the integer made from the string’s digits.
//  You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680
function getDigits(text){
    let result = " ";
    for(let i=0; i<text.length; i++){
        if(!isNaN(Number(text[i]))){
            result += text[i]
        }
    }
    return Number(result)
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized).
//  You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".
function acronym(text){
    let newText = "";
    let textUppered= text.toUpperCase().split(" ")
    for(let i=0; i<textUppered.length; i++){
        if(textUppered[i].length > 0){
            newText += textUppered[i][0]
        }
    }
    return newText;
}
console.log(acronym(" there's no free lunch - gotta pay yer way. "))

// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11
function countNonSpaces(text){
    let count = 0;
    for (char in text){
        if(text[char] != " "){
            count ++
        }
    }
    return count;
}
console.log(countNonSpaces("Hello world !"))

// Create a function that, given an array of strings and a numerical value, returns an array that only contains
//  strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) =>
//  ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => 
// ['There', 'bug', 'the', 'system']
function removeShorterStrings(arr, val){
    let newArr = []
    for(let i=0; i<arr.length; i++){
        if(arr[i].length >= val){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))