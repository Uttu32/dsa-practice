// LeetCode Problem: 344 - Reverse String 

// ## Problem Statement: 
// Write a function that reverses a string. 
// The input string is given as an array of characters `s`. 
// You must reverse it in-place using O(1) extra memory.

// ## Test Case: 
// Input:  s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// ## Key Approach: 
// - To reverse the array in-place, iterate only halfway through the array.  
// - Swap the first element with the last element, the second element with the second last, and so on.  
// - Continue this process until you reach the middle of the array.  
// - Use a temporary variable to hold one of the values during each swap.  
// - This ensures the array is reversed without using extra space.  


var reverseString = function(s) {
    for(let i=0; i<Math.floor(s.length /2); i++){
        let temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }
};