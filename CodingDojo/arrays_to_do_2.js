// Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, with existing elements 
// moved to other indices so that order of elements is reversed. 
// Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. 
// As always, do not use built-in array functions such as splice().
function reverse(arr){
    for(let i=0; i<Math.floor(arr.length/2); i++){
        [arr[i], arr[arr.length-i-1]] = [arr[arr.length-i-1], arr[i]]
    }
    return arr
}

// Implement rotateArr(arr, shiftBy) that accepts array and offset. 
// Shift arr's values to the right by that amount.
//  'Wrap-around' any values that shift off array's end to the other side, so that no data is lost.
//  Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.
function rotateArr(arr, shiftBy){
    let count = 0;
    while(count < shiftBy){
        for(let i=0; i<arr.length; i++){
            if(i==arr.length-1){
                break;
            }
            [arr[0], arr[i+1]] = [arr[i+1], arr[0]]
        }
        count++
    }
    return arr
}
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific 
// known range. Given arr and values min and max, retain only the array values between min and max. 
// Work in-place: return the array you are given,
//  with values in original order. No built-in array functions.
function filter(arr, min, max){
    for(let i =0; i<arr.length; i++){
        if(arr[i] > max || arr[i] < min){
            for(let j=i; j< arr.length; j++){
                arr[j] = arr[j+1]
            }
            arr.pop();
            i--
        }
    }
    return arr;
}
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays.
//  Return a new array containing the first array's elements, followed by the second array's elements.
//  Do not alter the original arrays.
//  Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
function arrConcat(arr1, arr2){
    let concatArr=[];
    for(let i =0; i<arr1.length;i++){
        concatArr.push(arr1[i])
    }
    for(let i =0; i<arr2.length;i++){
        concatArr.push(arr2[i])
    }
    return concatArr;
}
console.log(arrConcat( ['a','b'], [1,2,3,4,'hi'] ));
