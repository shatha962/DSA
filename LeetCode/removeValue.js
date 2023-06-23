var removeElement = function(nums, val) {
    var k = 0;
    for(i=0;i<nums.length;i++){
        if(nums[i] == val){
            nums[i] = "_"
            k++
        }
    }
    for(i=0;i<nums.length;i++){
        if(nums[i] == "_")
        for(j=nums.length-1;j>i;j--)
        if(nums[j] != "_"){
            nums[i] = nums[j]
            nums[j] = "_"
        }
    }
    console.log(k,nums)
    // var k = 0;
    // for(i=0;i<nums.length;i++){
    //     if(nums[i] == val){
    //         k++
    //         nums[i] += nums[i+1] 
    //         nums[i+1] = nums[i]-nums[i+1]
    //         nums[i] -=nums[i+1]
    //         nums[i+1] = "_"
    //     }
    //     else if(nums[i] == "_" && nums[i+1] != val){
    //         nums[i] ==nums[i+1]
    //         nums[i+1] == "_"
    //     }
    //     else if(nums[i] == "_" && nums[i+1] == val){
    //         nums[i+1] == "_"
    //     }
    // }
    return k,nums

};
removeElement([3,2,2,3],3)