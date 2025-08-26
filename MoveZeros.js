// LeetCode problem :- 283 Move zeroes

// Problem Statement :- Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// TestCases :- 
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input: nums = [0]
// Output: [0]


// ## Key Approach: 
// - Since we need to modify the array in-place, we can use the **two-pointer technique**.  
// - One pointer `i` starts from the beginning and looks for zero values.  
// - When a zero is found at index `i`, we introduce another pointer `j` which moves ahead of `i`.  
// - Pointer `j` searches for the next non-zero value.  
// - Once found, we swap `nums[i]` and `nums[j]` using a temporary variable.  
// - This ensures that all non-zero elements are shifted forward while zeros move towards the end.  


var moveZeroes = function(nums) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] == 0){
            for(let j=i+1; j<nums.length; j++){
                if(nums[j] != 0){
                    let temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                    break;
                }
            }
        }
    }
};