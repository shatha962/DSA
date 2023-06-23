    // Javascript implementation of the above approach.
     
    // Function to count the number of maximal contiguous
    // increasing and decreasing subsequences
    function numOfSubseq(arr, n)
 
    {
 
        let i, inc_count, dec_count;
        let max = new Array(n);
        max.fill(0);
        let min = new Array(n);
        min.fill(0);
 
        // k2, k1 are used to store the
        // count of max and min array
        let k1 = 0, k2 = 0;
 
        // Comparison to store the index of
        // first element of array
        if (arr[0] < arr[1])
            min[k1++] = 0;
        else
            max[k2++] = 0;
 
        // Comparison to store the index
        // from second to second last
        // index of array
        for (i = 1; i < n - 1; i++)
        {
            if (arr[i] < arr[i - 1]
                && arr[i] < arr[i + 1])
                min[k1++] = i;
 
            if (arr[i] > arr[i - 1]
                && arr[i] > arr[i + 1])
                max[k2++] = i;
        }
 
        // Comparison to store the index
        // of last element of array
        if (arr[n - 1] < arr[n - 2])
            min[k1++] = n - 1;
        else
            max[k2++] = n - 1;
 
        // Count of number of maximal contiguous
        // increasing and decreasing subsequences
        if (min[0] == 0)
        {
            inc_count = k2;
            dec_count = k1 - 1;
        }
        else
        {
            inc_count = k2 - 1;
            dec_count = k1;
        }
        return dec_count
    }
     
    let arr = [ 12, 8, 11, 13, 10, 15, 14, 16 ];
    let n = arr.length;
    console.log(numOfSubseq(arr, n));