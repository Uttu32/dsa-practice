// Leet code problem 179 Largest Number 

// In this problem we have given an array of non negative numbers in any order and on the basis of each permutation and combination we have to find in what order should we keep these numbers such that it will become the largest possible number.
// -------------------------- TESTCASE ------------------------
// let nums = [10, 2];
// for the above case there are 4 probabilities :- 10, 2, 102 and 210 So out of these 210 is the largest so this will be ans.

// let nums = [3,30,34,5,9]
// For the above case there are many orobabilities eg:- 3, 30, 34, 5, 9, 3303459,..... ,9534330 And the largest number possble is 9534330

// Step1 :- Comvert the number into string in the array
// So i noticed a pattern that if we sort the array on the basis of increasing sum of two string then we can possibly find the solution means :- 
// let i have 2 numbers as follows :- "3" and "30" now there are two possible sum :- 330 and 303 out of this whichever is greater we will sort on that basis.
// in case of "3" and "34" ==> 334 and 343 these are two options so output will be 343, so order wil be ==> [34, 3, 30, 5, 9]
// Now in case of "34" and "5" ==> possible sums are 345 and 534 so order will be ==> [5, 34, 3, 30, 9];
// Now in the case of "5" and "9" ==> sum are 59 and 95 ===> so 95 is greater than 59 so order will be ===> [9,5,34,3,30] 

// So when these numbers are concatinated after sorting then the highest possible number will be the output=> 9534330


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