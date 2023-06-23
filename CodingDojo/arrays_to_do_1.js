function pushFront(arr, x){
    for(let i=arr.length; i>=0; i--){
        arr[i] = arr[i-1]
        }
        arr[0] = x;
        return arr;
    }
    // popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
    // popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function
function popFront(arr){
    x=arr[0]
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i+1]
    }
    arr.pop()
    console.log(arr);
    return x;
}
function insertAt(arr, index, val){
    
}
console.log(popFront([4,5,7,9]));
// console.log(pushFront([5,7,2,3], 8));
