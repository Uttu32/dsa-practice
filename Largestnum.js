// Leet code problem 179 Largest Number 

// Problem:
// Given an array of non-negative integers, arrange them so that they form the largest possible number when concatenated.


// Key Idea:
// Treat numbers as strings (since concatenation matters more than numeric value).
// For any two strings a and b:
// Compare a + b and b + a.
// If a + b > b + a, then a should come before b.
// Otherwise, b should come before a.


// Steps:
// Convert all integers into strings.
// Sort the array using the above custom comparator.
// Join all elements to form the final string.
// Edge case: If the result starts with "0", return "0" (e.g., [0,0]).
// Example:
// Input: [3, 30, 34, 5, 9]
// Comparisons → Order: [9, 5, 34, 3, 30]
// Output: "9534330"
// Time Complexity:
// Sorting: O(n log n) (where n is the number of elements).
// Concatenation: O(n).



var largestNumber = function(nums) {
    // conversion of number into string.
    nums = nums.map((e) => e+'');

    // sorting the number on the basis of approch discussed above
    nums.sort((a, b) => {
        let t1 = a+b;
        let t2 = b+a;
        return t2 - t1;
    })

    let ans = nums.reduce((acc, cur) => {
        return acc = acc+ cur;
    }, "")
    if(Number(ans) == 0) return "0";
    return ans;
};