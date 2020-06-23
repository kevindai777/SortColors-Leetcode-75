//Given an array of 0's, 1's, and 2's that represent red, white, and blue respectively,
//sort the array so that the color sequence is reds (0) first, then whites (1), then blues (2).

let nums = [2,0,1,1,0,2]


//O(n) solution that does a one pass over the array with two pointers at the 
//beginning and end.

let start = 0
let end = nums.length - 1
let index = 0

while (index <= end && start < end) {
    //If a 0 is passed, swap it with the front pointer
    if (nums[index] == 0) {
        nums[index++] = nums[start]
        nums[start++] = 0
    //If a 2 is passed, swap it with the back pointer
    } else if (nums[index] == 2) {
        nums[index] = nums[end]
        nums[end--] = 2
    } else {
    //While moving the 0's and 2's, the 1's are automatically placed in the right spot
        index++
    }
}

return nums
