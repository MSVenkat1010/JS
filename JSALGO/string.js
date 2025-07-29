// * Reverse a string
// * @param {string} str - The string to reverse
// * @returns {string} - The reversed string
function reverseString(str) {
  return str.split("").reverse().join("");
}
// ! Normal way to reverse a string
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
// Detail Explaination:
// The reverseString function takes a string as input and
// returns a new string that is the reverse of the input string.

// ! merge sorted arrays
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0,
    j = 0;
  // This loop iterates through both arrays and compares the elements.
  // It adds the smaller element to the merged array and increments the respective index.
  // If one array is exhausted, it adds the remaining elements of the other array.
  // arr1 = [23, 45, 67, 89] arr2 = [12, 34, 56, 78]
  // for i=0, j=0
  while (i < arr1.length && j < arr2.length) {
    // arr1[0] = 23, arr2[0] = 12
    if (arr1[i] < arr2[j]) {
      // If the current element of arr1 is less than the current element of arr2,
      mergedArray.push(arr1[i]);
      i++;
    } else {
      // If the current element of arr2 is less than or equal to the current element of arr1,
      mergedArray.push(arr2[j]);
      // mergedArray = [12]
      // The current element of arr2 is added to the merged array.
      j++;
    }
  }
  // If there are remaining elements in either array, they are added to the merged array.
  // This ensures that all elements from both arrays are included in the merged array.
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  // If there are remaining elements in the second array, they are added to the merged array.
  // This ensures that all elements from both arrays are included in the merged array.

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  // The mergedArray now contains all elements from both input arrays in sorted order.
  return mergedArray;
}

// ! Two Sum Problem
/*
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/
function twoSum(nums, target) {
  // Create a map to store the indices of the numbers
  const numMap = new Map();
  // Iterate through the array to find two numbers that add up to the target
  // nums = [2,7,11,15], target = 9
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement of the current number
    // The complement is the number that, when added to nums[i], equals the target.
    // For example, if nums[i] is 2 and target is 9, then
    // complement would be 9 - 2 = 7.
    // This is the number we need to find in the map to complete the pair.
    const complement = target - nums[i];
    // Check if the complement exists in the map
    // If it does, we have found the two numbers that add up to the target.
    // The map stores the indices of the numbers, so we can return them.
    // If the complement is found, we return the index of the complement and the current index
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    // If the complement is not found, we add the current number and its index to the map
    // This allows us to check for the complement in future iterations.
    // For example, if nums[i] is 2, we add it to the map
    // with its index, so that if we encounter 7 later, we can find it
    // and return the indices of both numbers.
    // This is done to ensure that we only use each element once.
    // The map stores the number as the key and its index as the value.
    // This allows us to quickly check if the complement exists in the map.
    numMap.set(nums[i], i);
  }
  return [];
}

// ! Maximum Subarray
/* Given an integer array nums, 
find the subarray with the largest sum, 
and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23. */
// This function finds the maximum subarray sum using Kadane's algorithm.
// It iterates through the array, maintaining a running sum and updating the maximum sum found so
function maxSubArray(nums) {
  let maxSum = nums[0]; // Initialize maxSum with the first element
  let currentSum = nums[0]; // Initialize currentSum with the first element

  for (let i = 1; i < nums.length; i++) {
    // Update currentSum to be the maximum of the current element or the sum of currentSum and the current element
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Update maxSum to be the maximum of itself or the updated currentSum
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum; // Return the maximum subarray sum
}
// IF WE NEED TO FIND THE SUBARRAY ITSELF
/**
 *
 * ? kadane's algorithm in theory :
 * * 1. Initialize two variables: maxSum and currentSum.
 * * 2. Iterate through the array:
 * *    - For each element, update currentSum to be the maximum of the current element or the sum of currentSum and the current element.
 * *    - Update maxSum to be the maximum of itself or the updated currentSum.
 * * 3. Return maxSum as the result.
 *
 * Finds the contiguous subarray within a one-dimensional array of numbers
 * that has the largest sum. Returns both the sum and the subarray itself.
 *
 * This uses Kadane's Algorithm with index tracking.
 *
 * @param {number[]} nums - The input array of integers
 * @returns {{ maxSum: number, subArray: number[] }} - Object containing:
 *   - maxSum: The highest possible sum of any contiguous subarray
 *   - subArray: The actual subarray that gave this sum
 *
 * Example:
 *   Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
 *   Step-by-step:
 *     Start with maxSum = -2 (first element)
 *     i = 1 → currentSum = 1 → new maxSum = 1
 *     i = 2 → currentSum = -2 → maxSum remains 1
 *     i = 3 → currentSum = 4 → new maxSum = 4
 *     i = 4 → currentSum = 3 → maxSum remains 4
 *     i = 5 → currentSum = 5 → new maxSum = 5
 *     i = 6 → currentSum = 6 → new maxSum = 6
 *     i = 7 → currentSum = 1 → maxSum remains 6
 *     i = 8 → currentSum = 5 → maxSum remains 6
 *
 *   So the maximum sum is 6, coming from subarray [4, -1, 2, 1]
 */
function maxSubArrayWithIndices(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      tempStart = i;
    } else {
      currentSum += nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  return {
    maxSum: maxSum,
    subArray: nums.slice(start, end + 1),
  };
}

// ! Move Zeroes
/*Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 
*/

function moveZeroes(nums) {
  let lastNonZeroIndex = 0;
  // This variable keeps track of the position where the next non-zero element should be placed.
  // It starts at the beginning of the array.
  // The loop iterates through the array, checking each element.
  // If the current element is not zero, it is moved to the lastNonZeroIndex
  // position, and lastNonZeroIndex is incremented.
  // This effectively shifts all non-zero elements to the front of the array.
  for (let i = 0; i < nums.length; i++) {
    // If the current element is not zero, it is moved to the lastNonZeroIndex position.
    // This ensures that all non-zero elements are moved to the front of the array.
    // The lastNonZeroIndex is then incremented to point to the next position for a non-zero element.
    // This way, all non-zero elements are shifted to the front of the
    if (nums[i] !== 0) {
      // array, and all zeros are moved to the end.
      nums[lastNonZeroIndex] = nums[i];
      // Increment lastNonZeroIndex to point to the next position for a non-zero element.
      lastNonZeroIndex++;
    }
  }

  // After the loop, all non-zero elements are at the beginning of the array,
  // and lastNonZeroIndex points to the position where the next non-zero element should be
  // placed. Now, we fill the remaining positions in the array with zeros.
  for (let i = lastNonZeroIndex; i < nums.length; i++) {
    // Fill the remaining positions in the array with zeros.
    nums[i] = 0;
  }

  return nums;
}

// ! Contains Duplicate
/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]

Output: true

Explanation:
The element 1 occurs at the indices 0 and 3.
Example 2:
Input: nums = [1,2,3,4]
Output: false
Explanation:
All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

function containsDuplicate(nums) {
  let seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    } else {
      seen.add(nums[i]);
    }
  }
  return false;
};

// ! Rotate Array
/*
Given an integer array nums, 
rotate the array to the right by k steps, 
where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

*/
function rotateArray(nums, k) {
  const n = nums.length;
  // Normalize k to ensure it is within the bounds of the array length
  k = k % n;

  // Reverse the entire array
  // This step reverses the entire array, which is a crucial part of the rotation process.
  // It allows us to rearrange the elements in such a way that we can easily rotate
  // the array by reversing specific segments.
  // n = nums.length;
  // This line calculates the length of the array nums, which is used to determine how many

  reverse(nums, 0, n - 1);
  // Reverse the first k elements
  // This step reverses the first k elements of the array.
  // After reversing the entire array, we reverse the first k elements to place them
  // at the beginning of the array in the correct order.

  reverse(nums, 0, k - 1);
  // Reverse the remaining n-k elements
  // This step reverses the remaining n-k elements of the array.
  // After reversing the first k elements, we reverse the remaining elements to place them
  // in the correct order after the first k elements.
  // This ensures that the entire array is rotated correctly.

  reverse(nums, k, n - 1);
}   
// Helper function to reverse a portion of the array
function reverse(arr, start, end) {
    // This function reverses a portion of the array from index start to index end.
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
