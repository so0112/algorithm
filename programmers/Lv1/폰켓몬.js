function solution(nums) {
    const   max = nums.length / 2;
    const   noDupNums = [...new Set(nums)];
    
    return noDupNums.length > max ? max : noDupNums.length
}