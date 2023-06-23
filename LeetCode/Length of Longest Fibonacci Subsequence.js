var lenLongestFibSubseq = function(arr) {
    var long = 2;
    const set = new Set(arr)
    // 2,4,7,8,9,10,14,15,18,23,32,50
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
        let a = arr[i];
        let b = arr[j];
        length = 2
        while(set.has(a+b)){
            length ++
            let temp = a+b
            a=b 
            b=temp
        }
        long = Math.max(length,long)
        }
    }
    return long == 2 ? 0 : long
}
console.log(lenLongestFibSubseq([2,4,7,8,9,10,14,15,18,23,32,50]));